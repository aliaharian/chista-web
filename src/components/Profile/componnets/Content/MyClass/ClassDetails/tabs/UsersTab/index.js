import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import SearchRoundedIcon from "../../../../../../../../assets/images/searchIcon.svg"
import closeIcon from "../../../../../../../../assets/images/close.svg"

import axios from "axios";
import { Divider, Grid } from "@material-ui/core";
import { loadClassDetails } from "../../../../../../../../../redux/adviserDashboard";
import BlackAdd from '../../../../../../../../assets/images/black_add.webp';
import MemberTableCell from "./MemberTableCell";

import noData from '../../../../../../../../assets/images/meetings.svg'
import close from "../../../../../../../../assets/images/close.svg";

import classes from '../../../../../../../../assets/stylesheet/profile/myClass/classDetail.module.scss'
import { withSnackbar } from "notistack";
import ContactsItemSkeleton from "../../../../Contacts/ContactsItemSkeleton";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { errorSnackbar, infoSnackbar, enqueueText } from "../../../../../../../../../redux/user";
import { changeRole } from "../../../../../../../../../redux/userDetails";

import AddMember from "../../../InsertClass/Steps/AddMember";
import DialogLayout from "../../../../Contacts/dialog/DialogLayout";
import SingleSelectChistaDropdown from "../../../../../../../Kit/Dropdown/SingleSelectChistaDropdown";
import ModalLayoutWithHeader from "../../../../../../../Kit/Layouts/ModalLayoutWithHeader";
import ChangeRoleDialog from "../../../../Contacts/contactDetail/tabs/InThisClass/ChangeRoleDialog";
import ChistaSearchInput from "../../../../../../../Kit/Inputs/ChistaSearchInput";
import { numberFormat } from "../../../../../../../../utilities";

const UsersTab = ({ index, id, active, enqueueSnackbar, ...props }) => {
    const Dispatch = useDispatch();
    const [memberList, setMemberList] = useState(props.memberList);
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [classFilter, changeClassFilter] = useState(`all`);
    const [filteredData, setFilteredData] = useState([...props.memberList]);
    const [searchInput, setSearchInput] = useState('');
    const [isFiltered, setIsFiltered] = useState(false)
    const [addMemberLoading, setAddMemberLoading] = useState(false);
    const userInfo = useSelector((state) => state.user.user);
    const errorText = useSelector((state) => state.user.errorText);
    const [openEditRole, setOpenEditRole] = useState(false)
    const [selectedUser, setSelectedUser] = useState()
    const changeRoleResponse = useSelector((state) => state.userDetails.changeRoleResponse);
    const changeRoleLoading = useSelector((state) => state.userDetails.changeRoleLoading);
    const [assistants, setAssistants] = useState([])

    const [allData, setAllData] = useState(
        {
            addContactList: [],
        }
    );
    const theme = useTheme();
    const searchRef = useRef();
    const isMobile = useMediaQuery(theme.breakpoints.down(800));
    React.useEffect(() => {
        setMemberList(props.memberList)

        let tmp = []
        props.memberList.map((member) => {
            if (member.memberRoleType == process.env.REACT_APP_ASSISTANT_ROLE_TYPE) {
                tmp.push(member.id)
            }
        })
        setAssistants([...tmp])
        console.log('assistantSet', tmp)
        console.log('assistantSet', props.memberList)

    }, [props.memberList])

    const addUserToClass = async (data) => {
        setAddMemberLoading(true)
        try {
            const response = await axios.post(`group/addMembers`, data);
            setShowAddUserModal(false);
            Dispatch(loadClassDetails(response.data));
            props.getData();
            setAddMemberLoading(false)
        } catch (err) {
            Dispatch(errorSnackbar(err));
            console.log("err");
            setAddMemberLoading(false)
        }
    };

    const handleComingSoon = () => {
        Dispatch(infoSnackbar(0))
    }

    const handleAddMember = (name, data) => {
        // setShowAddUserModal(false);
        let users = [...data.addContactList, ...data.addContactNumber]
        addUserToClass({
            id,
            members: users.map((item) => ({
                username: item.username || item.phone,
                memberRoleType: process.env.REACT_APP_MEMBER_ROLE_TYPE,
            })),
        });
    };



    const handleSearch = (value) => {
        changeClassFilter(value.role)
        setSearchInput(value.q)
        let tmp;
        if (value.role === `all`) {
            setIsFiltered(false)
            tmp = memberList.filter((item) => {
                return item.fullName.includes(value.q)
            });
        } else {
            setIsFiltered(true)
            tmp = memberList;
            tmp = tmp.filter((member) => {
                return member.memberRoleType === value.role
            })
            tmp = tmp.filter((item) => {
                return item.fullName.includes(value.q)
            });
        }
        setFilteredData(tmp)
    }
    const handleChangeRole = (roleType) => {
        let members = []
        if (roleType !== process.env.REACT_APP_ASSISTANT_ROLE_TYPE) {
            members.push({ id: selectedUser.id })
        } else {
            assistants.map((user) => {
                members.push({ id: user })
            })
            members.push({ id: selectedUser.id })
        }

        if (roleType == process.env.REACT_APP_ASSISTANT_ROLE_TYPE && members.length > process.env.REACT_APP_CLASS_MAX_ASSISTANTS) {
            Dispatch(errorSnackbar({ response: { data: { message: `تعداد ناظر بیشتر از ${numberFormat.toPersianDigits(process.env.REACT_APP_CLASS_MAX_ASSISTANTS)} نفر نمی تواند باشد` } } }));
            return;
        }

        Dispatch(changeRole(members, roleType, props.data.id))

        // setOpenEditRole(false)
    }

    useEffect(() => {
        if (!changeRoleLoading && errorText === '') {
            setOpenEditRole(false)
            console.log(changeRoleResponse)
            console.log(changeRoleResponse?.members?.find((x) => x.id == props.data.id)?.memberRoleStr)
            props.getData();

        }
        console.log(errorText)
    }, [changeRoleLoading])

    const handleEditRole = () => {
        setOpenEditRole(true)
        Dispatch(enqueueText(''))
    }

    return (
        <div
            role="tabpanel"
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
        >
            {(selectedUser && openEditRole) &&
                <ChangeRoleDialog errorText={errorText} open={openEditRole} closeModal={() => setOpenEditRole(false)} memberInfo={selectedUser}
                    handleSubmit={(roleType) => handleChangeRole(roleType)} />
            }

            <div className={classes.userHeader}>
                <div className={classes.searchUserContainer}>
                    <ChistaSearchInput
                        customClassContainer={clsx(
                            classes.searchDesktop,
                            classes.search,
                            classes.searchExpand
                        )}
                        // inputClassName={classes.myClassMenuSearchInput}
                        lastIcon={
                            searchInput.length !== 0 ? closeIcon : SearchRoundedIcon
                        }
                        onChange={(e) => {

                            handleSearch({
                                q: e.target.value,
                                role: classFilter
                            })
                        }}
                        placeholder={'جستجو'}
                        inputValue={searchInput}
                        showLastIcon
                        onClickLastIcon={() => { 
                            handleSearch({
                                q: '',
                                role: classFilter
                            })
                        }}

                    />
               
                    {!isMobile &&

                        <SingleSelectChistaDropdown
                            options={[
                                {
                                    title: `همه`,
                                    value: `all`
                                },
                                {
                                    title: `استاد`,
                                    value: process.env.REACT_APP_OSTAD_ROLE_TYPE
                                },
                                {
                                    title: `شرکت کننده`,
                                    value: process.env.REACT_APP_MEMBER_ROLE_TYPE
                                },
                                {
                                    title: `ناظر`,
                                    value: process.env.REACT_APP_ASSISTANT_ROLE_TYPE
                                },
                                {
                                    title: `مهمان`,
                                    value: process.env.REACT_APP_GUEST_ROLE_TYPE
                                },
                            ]}
                            maxHeight={'100%'}
                            selectedValue={classFilter}
                            customClassRoot={classes.filterDropdown}
                            handleChange={(e) => {
                                handleSearch({
                                    q: searchInput,
                                    role: e.target.value
                                })
                            }}
                            customSize={170}
                            dropdownCustomContainer={classes.filterClassesDropDown}
                        />
                    }
                </div>
            </div>

            <Grid>
                <Grid container>
                    {props.memberListLoading ?
                        <div className={classes.userTapGridView}>
                            {props.membersInfo.map((member) => (
                                <ContactsItemSkeleton fullSize disableChat />
                            ))
                            }
                        </div>
                        :
                        memberList.length > 0 || filteredData.length > 0 ? (
                            (searchInput.length > 0 && filteredData.length == 0) || (classFilter !== 'all' && filteredData.length == 0) ?
                                <Grid style={{ height: 100 }} className={classes.nodata}>
                                    <img src={noData} alt="" />
                                    <p>کاربری یافت نشد</p>
                                </Grid>
                                :
                                <div className={classes.userTapGridView}>
                                    {(props.data.myRole !== process.env.REACT_APP_MEMBER_ROLE_TYPE || props.data.creatorId == userInfo?.id) && active ?
                                        <div className={classes.addMemberContainer}
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => setShowAddUserModal(true)}>
                                            <div>
                                                <div>
                                                    <img src={BlackAdd} alt={'add'} />
                                                </div>
                                                <span>
                                                    افزودن عضو جدید
                                                </span>
                                            </div>
                                        </div>
                                        : null}
                                    {searchInput.length > 0 || isFiltered ?
                                        filteredData.map((row) => (
                                            <MemberTableCell
                                                handleChangeRole={() => {
                                                    setSelectedUser(row)
                                                    setOpenEditRole(true)
                                                }}
                                                id={id}
                                                row={row}
                                                key={row.id}
                                            />
                                        ))
                                        :
                                        memberList.map((row) => (
                                            <MemberTableCell
                                                handleChangeRole={() => {
                                                    setSelectedUser(row)
                                                    setOpenEditRole(true)
                                                }}
                                                data={props.data}
                                                id={id}
                                                row={row}
                                                key={row.id}
                                            />
                                        ))
                                    }
                                </div>
                        ) :
                            <Grid style={{ height: 100 }} className={classes.nodata}>
                                <img src={noData} alt="" />
                                <p>کاربری یافت نشد</p>
                            </Grid>


                    }
                </Grid>
            </Grid>

            {showAddUserModal &&
                // <DialogLayout
                //     title={`اضافه کردن عضو`}
                //     style={{ position: 'unset', padding: '0px' }}
                //     open={showAddUserModal}
                // closeModal={() => {
                //     setShowAddUserModal(false)
                //     setAllData({
                //         addContactList: [],
                //     })
                // }}
                //     customBack
                // >
                <ModalLayoutWithHeader
                    openDialog={showAddUserModal}
                    closeModal={() => {
                        setShowAddUserModal(false)
                        setAllData({
                            addContactList: [],
                        })
                    }}
                    style={{ position: 'unset' }}
                >
                    <div className={classes.shareModalHeaderWrapper}>
                        <div className={classes.shareModalTitle}>
                            <div>

                                <img
                                    src={close}
                                    alt="icon"
                                    style={{ marginLeft: 13, width: 17 }}
                                    onClick={() => {
                                        setShowAddUserModal(false)
                                        setAllData({
                                            addContactList: [],
                                        })
                                    }}
                                />
                                <p>اضافه کردن عضو</p>
                            </div>

                        </div>
                    </div>
                    <Divider className={classes.divider} />
                    <div className={classes.stepContainer}>
                        <AddMember
                            handelStep={handleAddMember}
                            photo={``}
                            title={``}
                            loading={addMemberLoading}
                            handleClose={() => {
                                setShowAddUserModal(false)
                                setAllData({
                                    addContactList: [],
                                })
                            }}
                            initialValues={{
                                addContactList: allData?.addContactList,
                                addContactNumber: allData?.addContactNumber,
                            }}
                        />
                    </div>
                </ModalLayoutWithHeader>
            }

        </div>
    );
};

export default withSnackbar(UsersTab);
