import { CircularProgress, ListItem, useMediaQuery, useTheme } from "@material-ui/core"
import { useEffect, useRef, useState } from "react"
import FilterSelect from "../../../../../../form/FilterSelect"
import DialogLayout from "../../../Contacts/dialog/DialogLayout"
import useStyles from './Styles'
import SearchRoundedIcon from '../../../../../../../assets/images/searchIcon.svg'
import closeIcon from "../../../../../../../assets/images/close.svg";
import clsx from "clsx"
import Scrollbars from "react-custom-scrollbars/lib/Scrollbars"
import MemberItem from "./MemberItem"
import settingIcon from "../../../../../../../assets/images/setting.svg"
import FilterModal from "./filterModal/FilterModal"

function UsersScorsDialog(props) {
    const classes = useStyles()
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [isExpand, setIsExpand] = useState(false)
    const [addListShadow, setAddListShadow] = useState('none');
    const [openFilter, setOpenFilter] = useState(false);

    const [openActivityFilter, setOpenActivityFilter] = useState(false)
    const [users, setUsers] = useState(props.users)
    const addContactScroll = useRef();

    const handleScroll = () => {
        if (addContactScroll.current.viewScrollTop < 5) {
            setAddListShadow('none')
        } else {
            setAddListShadow('0 3px 6px #00053412')
        }
    }
    const toggleExpand = () => {
        setIsExpand(!isExpand);
        if (!isExpand) console.log('ok')
        else {
            props.changeUserSearchText('')
            props.changeUserFilter({ target: { value: 'all' } })
        }
    };

    useEffect(() => {
        let tmp = [];
        let corrected = 0;

        if (props.userFilter !== 'all') {
            switch (props.userFilter) {
                case 'corrected':
                    console.log('corr')
                    props.users.map((examineeInfo) => {
                        if ((examineeInfo.scoring) || (examineeInfo.scoring === 0) || (examineeInfo.descriptivePartName)) {
                            tmp.push(examineeInfo)
                        }
                    })
                    break;
                case 'nonCorrected':
                    props.users.map((examineeInfo) => {
                        if ((!examineeInfo.scoring && examineeInfo.scoring !== 0 && !examineeInfo.descriptivePartName)) {
                            tmp.push(examineeInfo)
                        }
                    })
                    break;
                case 'notAnswered':
                    props.users.map((examineeInfo) => {
                        if (examineeInfo.answers.length === 0) {
                            tmp.push(examineeInfo)
                        }
                    })
                    break;
                default:
                    tmp.push([...props.users])
                    break;
            }
            setUsers([...tmp])
        } else {
            tmp = []
            props.users.map((examineeInfo) => {
                if (examineeInfo.memberInfo.firstName?.search(props.userSearchText) !== -1 || examineeInfo.memberInfo.lastName?.search(props.userSearchText) !== -1 || examineeInfo.memberInfo.phone?.search(props.userSearchText) !== -1) {
                    tmp.push(examineeInfo)
                }
            });
            setUsers([...tmp])
        }
    }, [props.userFilter, props.userSearchText])
    return (
        <>
            <div style={{zIndex: 100}}>
                <DialogLayout
                    open={props.open}
                    closeModal={props.handleClose}
                    className={{
                        root: classes.root
                    }}
                    style={{ padding: '15px 0', zIndex: 20 }}
                    title={`نمرات اعضا`}
                >
                    <FilterModal
                    open={openFilter}
                    handleClose={() => setOpenFilter(false)}
                    handleSubmit={(e) => {
                        console.log('e',e)
                        props.changeUserFilter(e)
                        props.changeUserSearchText('')
                    }}
                />
                    <div className={classes.searchBar}>
                        <div
                            className={clsx(
                                classes.searchDesktop,
                                classes.search,
                                classes.searchExpand
                            )}
                        >
                            <input
                                name="title"
                                placeholder={`جستجو`}
                                value={props.userSearchText}
                                autoComplete={`off`}
                                onChange={(e) => {
                                    setIsExpand(true)
                                    props.changeUserSearchText(e.target.value)
                                    props.changeUserFilter({ target: { value: 'all' } })
                                }}
                            />
                            {
                                loadUsersLoading &&
                                <CircularProgress className={classes.classSearchLoading} />
                            }
                            {
                                props.userSearchText.length === 0 ?
                                    <img src={SearchRoundedIcon}
                                        onClick={toggleExpand}
                                        className={classes.searchIcon} />
                                    :
                                    <img src={closeIcon}
                                        style={{
                                            height: 18,
                                            width: 18,
                                            top: 11
                                        }}
                                        onClick={toggleExpand}
                                        className={classes.searchIcon} />
                            }
                        </div>
                        {isMobile ?
                            <img src={settingIcon} style={{ cursor: 'pointer' }} onClick={() => { setOpenFilter(true) }} />
                            : <FilterSelect
                                open={openActivityFilter}
                                handleOpen={() => setOpenActivityFilter(true)}
                                handleClose={() => setOpenActivityFilter(false)}
                                value={props.userFilter}
                                handleChange={(e) => {
                                    props.changeUserFilter(e)
                                    props.changeUserSearchText('')
                                }}
                                width={110}
                                label={`نمایش`}
                                datas={[
                                    {
                                        label: `همه`,
                                        value: `all`
                                    },
                                    {
                                        label: `تصحیح شده`,
                                        value: `corrected`
                                    },
                                    {
                                        label: `تصحیح نشده`,
                                        value: `nonCorrected`
                                    },
                                    {
                                        label: `پاسخ داده نشده`,
                                        value: `notAnswered`
                                    },
                                ]}
                            />}
                    </div>
                    <div className={classes.contactList}>
                        <Scrollbars onScroll={handleScroll} ref={addContactScroll}>
                            {users?.length > 0 ? (
                                users.map((item, index) => (
                                    <ListItem
                                        key={index}
                                        className={classes.itemWrapper}
                                    >
                                        <MemberItem
                                            examineeInfo={item}
                                            memberInfo={item.memberInfo}
                                            activity={props.activity}
                                            descriptives={props.descriptives}
                                        />
                                    </ListItem>
                                ))
                            ) : (
                                <div className={classes.noDataWrapper}>
                                    <p>موردی یافت نشد</p>
                                </div>
                            )}
                        </Scrollbars>
                    </div>
                </DialogLayout>
            </div>
        </>
    )
}

export default UsersScorsDialog