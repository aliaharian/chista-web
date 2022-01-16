import React, { useEffect, useState } from 'react';
import Style from '../../../../../assets/stylesheet/profile/teacherRegister.module.scss';
import Back from '../../../../../assets/images/profile/registerOstad/ArrowRight.svg';
import ChistaSearchInput from '../../../../Kit/Inputs/ChistaSearchInput';
import Search from '../../../../../assets/images/profile/registerOstad/search.svg';
import Close from '../../../../../assets/images/profile/registerOstad/closeModal.svg';
import KitStyle from '../../../../Kit/Style/kits.module.scss';
import RadioButton from '../../../../Kit/Checkbox/RadioButton';
import ChistaButton from '../../../../Kit/Buttons/ChistaButton';
import { getCities } from '../../../../../../redux/teacherRegister';
import { connect } from 'react-redux';

function SelectCityDialog(props) {

    const [searchText, setSearchText] = useState('')
    const [level, setLevel] = useState(0)
    useEffect(() => {
        props.getCities(0)
    }, [])

    const handleBack = () => {
        if(level == 0) {
            props.closeModal()
        }
        else {
            setLevel(0);
            // props.onSelectCity([]);
        }
    }

    const handleGetCity = (item) =>  {
        let locArr = [...props.city];
        locArr[1] = item
        props.onSelectCity([...locArr])
    }

    const goNextLevel = (item) => {
        setSearchText(''); 
        props.getCities(item.id); 
        setLevel(1); 
        props.onSelectCity([item])
    }

    return (
        <div className={Style.selectCityContainer}>
            <div className={Style.selectCityHeader}>
                <div>
                    <img src={Back} alt={'back'}
                    onClick={handleBack}
                    />
                    <span>
                        {level == 0 ? 'استان' : 'شهر'}
                    </span>
                </div>
                {level != 0 ? 
                    <ChistaButton
                    customClassName={KitStyle.btn_height30}
                    onClick={() => props.closeModal()}
                    disabled={props.city.length != 2}
                    >
                        تایید
                    </ChistaButton>
                : null
                }
            </div>
            <div className={Style.searchInputPadding}>
                <ChistaSearchInput
                placeholder={`جستجو در ${level == 0 ? 'استان': 'شهر'}`}
                lastIcon={Search}
                inputValue={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                customClassContainer={KitStyle.searchInput_height40_gray}
                showLastIcon={true}
                />
            </div>
            <div className={Style.selectCityBody}>
                {level == 1 ?
                    props.cities?.map(item => item.name.includes(searchText) && (
                        <div className={Style.selectCityItemsContainer} onClick={() => handleGetCity(item)}>
                            <RadioButton isChecked={props.city[1] &&  item.name == props.city[1].name}/>
                            <p>
                                {item.name}
                            </p>
                        </div>
                    ))
                :
                    props.areas?.map(item => item.name.includes(searchText) && (
                        <p onClick={() => goNextLevel(item)}>
                            {item.name}
                        </p>
                    ))
                }
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cities: state.teacherRegister.cities,
    areas: state.teacherRegister.areas,
});

export default connect(mapStateToProps, {getCities})(SelectCityDialog);