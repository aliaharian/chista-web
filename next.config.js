const withImages = require('next-images');
const withFonts = require('next-fonts');
module.exports = withImages(withFonts({
    env:{
        REACT_APP_DESCRIPTIVE_TEST_TYPE:"DESCRIPTIVE",
        REACT_APP_MULTIPLE_CHOICE_TEST_TYPE:"MULTIPLE_CHOICE",
        REACT_APP_GROUP_TEST_TYPE:"GROUP",

        REACT_APP_CATEGORY_TYPE:"CATEGORY",
        REACT_APP_COURSE_TYPE:"COURSE",
        REACT_APP_IMAGE_URL:"https://chista.ir/",
        REACT_APP_BASE_URL:"https://devapiadmin.chista.ir/api/v1",
        REACT_APP_SSO_BASE_URL:"https://devapiaccount.chista.ir/api/v1",
        REACT_APP_PAY_BASE_URL:"https://devapipay.chista.ir/api/v1",
        REACT_APP_CHAT_URL:"https://test.chista.ir",
        REACT_APP_CHAT_BASE_URL:"https://devapichat.chista.ir/api/v1/",
        REACT_APP_PAY_URL:"https://a.chista.ir/pay/",
        REACT_APP_ACTIVITY_URL:"https://devapiactivity.chista.ir",
        REACT_APP_BASE_URL_NEW: "https://devapiadmin-2.chista.ir",
        REACT_APP_USER_GUEST_UX_ID:2800,
        REACT_APP_SERVICE_ID:2800,
        REACT_APP_TRANSACTION_TYPE:611,
        REACT_APP_APP_ID:3005,
        REACT_APP_STATUS_ONLINE:211,
        REACT_APP_STATUS_BUSY:213,
        REACT_APP_STATUS_OFFLINE:219,
        REACT_APP_CALLBACK_BANK:"http://a.chista.ir",
        REACT_APP_MAX_RESULT_SEARCH:30,
        REACT_APP_SM_WIDTH:960,
        REACT_APP_OSTAD_ROLE_TYPE:1214,
        REACT_APP_MEMBER_ROLE_TYPE:1215,
        REACT_APP_ASSISTANT_ROLE_TYPE:1212,
        REACT_APP_GUEST_ROLE_TYPE:1217,
        REACT_APP_CREATOR_ROLE_TYPE:1211,
        REACT_APP_BANK_ID:521,
        REACT_APP_IMAGE_UPLOAD_SIZE: 1024*1024,
        REACT_APP_VIDEO_UPLOAD_SIZE: 30*1024*1024,
        REACT_APP_HELP_URL:"https://a.chista.ir/help/5",
        REACT_APP_CLASS_MAX_USERS:200,
        REACT_APP_CLASS_MAX_ASSISTANTS:5,
        REACT_APP_NODE_CONTROLLER_BASE_URL:"https://devapievaluation.chista.ir",
        REACT_APP_GET_NODES_WITH_PARENT_ID:"/nodes/public/children/",
        REACT_APP_FETCH_NODES_CHILDREN_WITH_PARENTID:"/nodes/public/children/PARENTID",
        REACT_APP_FETCH_COURSE_ALL:"/course/all",
        REACT_APP_FETCH_TEST_BANKS:"/testBanks/public/page",
        REACT_APP_ATTACHMENT_WITH_UUID:"/attachments/bytes/UUID",
        REACT_APP_ADD_TEACHER: '/professors',
        REACT_APP_ALL_GET_NODES: '/nodes/page',
        REACT_APP_MIN_CLASS_NAME: 2,
        REACT_APP_MAX_CLASS_NAME:30,

        REACT_APP_UCLAIM: typeof window !== 'undefined' ? localStorage.getItem('uclaim') : null
    },
    webpack(config, options) {
        config.module.rules.push({
          test: /\.worker\.js$/,
          loader: 'worker-loader',
          // options: { inline: true }, // also works
          options: {
            filename: 'static/[hash].worker.js',
            publicPath: '/_next/',
          },
        });
        return config
    }
}))
