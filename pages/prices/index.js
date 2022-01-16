import React from 'react';
import Layout from "../../src/components/HomePage/Layout/Layout";
import Style from "../../src/assets/stylesheet/prices.module.scss";
import Head from "next/head";
import Tariffs from "../../src/components/Prices/Components/Tariffs";
import Faq from "../../src/components/Prices/Components/Faq";
import {connect} from "react-redux";
import {authUpdateField} from "../../redux/auth";
import ActivityTariffs from '../../src/components/Prices/Components/ActivityTariffs';
import { activityTariffs, faq, tariffs } from '../../src/utilities/constants';
import InsertClassInGiftMode from '../../src/components/InsertClass/InsertClassInGiftMode';

function Prices(props) {

    return (
        <Layout>
            <InsertClassInGiftMode/>
            <Head>
                <title>تعرفه ها - چیستا</title>
            </Head>
            <div className={Style.priceMainContainer}>
                <h2>استفاده از پلتفرم کلاس آنلاین چیستا</h2>
                <p>
                    براي ايجاد كلاس در چيستا بر اساس نياز خود يكي از پلن هاي زير را انتخاب نماييد، به تعداد
                    دلخواه كلاس بسازيد و در هر زمان كه مايل بوديد كلاس را اجرا كنيد. تنها معيار انتخاب بسته
                    ، تعداد كاربراني است كه همزمان در كلاسهاي شما شركت ميكنند. ضمنا اگر براي اولين بار در
                    چيستا ثبت نام نموده ايد بلافاصله يك بسته رايگان به شما تعلق ميگيرد و ميتوانيد با حداكثر۳
                    ساعت و ۵ كاربر همزمان ،از تجربه برگزاري كلاس آنلاين در چيستا لذت ببريد
                    .براي استفاده از بسته هديه يكماه از تاريخ ثبت نام فرصت داريد
                </p>
                <Tariffs tariffs={tariffs}/>
                <ActivityTariffs tariffs={activityTariffs}/>
                <Faq faq={faq}/>
            </div>
        </Layout>
    )
}

Prices.propTypes = {};

const mapStateToProps = (state) => ({
    user: state.user.user,
});

export default connect(mapStateToProps, {
    authUpdateField,
})(Prices);
