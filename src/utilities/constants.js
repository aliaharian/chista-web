import AutoGeneratePng from '../assets/images/etc_features/png/auto_generate.png'
import HomeworkPng from '../assets/images/etc_features/png/homework.png'
import RollCallPng from '../assets/images/etc_features/png/roll_call.png'
import KeepDataPng from '../assets/images/etc_features/png/keep_data.png'
import ManageStudentsPng from '../assets/images/etc_features/png/manage_students.png'
import DefineMeetingPng from '../assets/images/etc_features/png/define_meeting.png'
import AutoGenerateWebp from '../assets/images/etc_features/png/auto_generate.png'
import HomeworkWebp from '../assets/images/etc_features/webp/homework.webp'
import RollCallWebp from '../assets/images/etc_features/webp/roll_call.webp'
import KeepDataWebp from '../assets/images/etc_features/webp/keep_data.webp'
import ManageStudentsWebp from '../assets/images/etc_features/webp/manage_students.webp'
import DefineMeetingWebp from '../assets/images/etc_features/webp/define_meeting.webp'
import BoardWebPng from '../assets/images/why_chista/png/board.png'
import VideoWebPng from '../assets/images/why_chista/png/video.png'
import ShareScreenPng from '../assets/images/why_chista/png/share.png'
import BoardWebWebp from '../assets/images/why_chista/webp/board.webp'
import VideoWebWebp from '../assets/images/why_chista/webp/video.webp'
import ShareScreenWebp from '../assets/images/why_chista/webp/share.webp'
import ProfileSidebar from "../assets/images/profile/ProfileSidebar";
import PacketSidebar from "../assets/images/profile/PacketSidebar";
import StarSidebar from "../assets/images/profile/StarSidebar";
import BlackboardSidebar from "../assets/images/profile/BlackboardSidebar";
import WalletSidebar from "../assets/images/profile/WalletSidebar";
import CheckList from "../assets/images/CheckList";
import ContactSidebar from "../assets/images/profile/ContactSidebar";
import BookmarkSidebar from "../assets/images/profile/BookmarkSidebar";
import CommentSidebar from "../assets/images/profile/CommentSidebar";
import OstadSidebar from "../assets/images/profile/OstadSidebar";
import blackboard from '../assets/images/profile/dashboardBlackboard.svg'
import gift from '../assets/images/profile/dashboardgiftBox.svg'
import wallet from '../assets/images/profile/dashboardWallet.svg'
import activity from '../assets/images/activityPacketIcon.svg'

export const why = [
    {
        title: `???????? ????????????`,
        desc: `?????????? ?????????????? ???????? ???????????? ?????????????? ?? ?????????? ???????????? ???????????? ?????? ???? ?????????? ?????????? ???? ???????? ???? ???????? ???? ?????????? ?? ???????? ?????? ???????????? ?????????? ?? ?????? ???????? ???????? ?????????? ???? ???????????? ??????.`,
        iconClassPng: BoardWebPng,
        iconClassWebp: BoardWebWebp,
        key: 1
    },
    {
        title: `???????????? ????????????`,
        desc: `?????? ?? ?????????? ???????? ?? ???? ?????????? ???? ???? ?????????? ???????????? ?? ?????????????? ?????????????? ?????????? ?????????? ???????????? ??????. ???????? ?????????? ?????????? ???????????????? ???? ???????? ???????????? ???????????? ???? ???? ???????? ?????? ?????????? ??????????`,
        iconClassPng: VideoWebPng,
        iconClassWebp: VideoWebWebp,
        key: 2
    },
    {
        title: `???????????? ????????`,
        desc: `???? ?????????? ???????? ?????????? ???? ?????? ?? ?????????? ???????? ?????????? ?? ???????? ???? ?? ?????????? ???? ???? ???????? ???? ???????? ???????????? ???? ???????????????? ?????? ???? ???????????? ?????????? ????????.`,
        iconClassPng: ShareScreenPng,
        iconClassWebp: ShareScreenWebp,
        key: 3
    }
]
export const etcFeaturesObj = [
    {
        title: `???????? ?? ???????? ????????????`,
        desc: `???????????? ???????? ???? ?????????????? ?????????? ???? ?????????? ???????? ????????! ?????? ?????????? ?????????? ???????? ???? ?????????????? ???? ???? ???????????????? ?????????????? ???? ???????????? ?? ?????????? ???????????? ?????????? ???? ?????? ???????? ???????? ???? ???????????????? ???? ???????? ???? ???????????? ?????????? ?? ???? ???????? ?????????? ???? ???? ???????????? ?????????? ??????.`,
        iconClassPng: RollCallPng,
        iconClassWebp: RollCallWebp,
        key: 1
    },
    {
        title: `?????????????? ???????????? ????????????`,
        desc: `?????????? ???????? ?????????????? ?????????? ?? ?????? ???????? ???? ???????? ???????? ?????? ??????????????????? ???????????? ???????????? ?? ??????????????????? ?????????? ?????? ???? ???? ???????????? ?????????? ?? ???????????? ????????????`,
        iconClassPng: KeepDataPng,
        iconClassWebp: KeepDataWebp,
        key: 2
    },
    {
        title: `?????????? ?? ??????????`,
        desc: `?????????? ?????? ?????????? ???? ?????????? ?????????? ???? ???????????? ?????????????? ????????????????? ?? ???????????? ???? ???????? ???? ?????????? ???????????? ?????????? ?? ???????? ?? ?????????? ????????????.`,
        iconClassPng: HomeworkPng,
        iconClassWebp: HomeworkWebp,
        key: 3
    },
    {
        title: `???????????? ?? ?????????????????????`,
        desc: `???????????? ?? ???????????? ??????????????????? ???? ???? ???????? ?????????? ???????? ?? ???????????? ???????? ?????????????? ???? ?????????? ???????? ?? ????????????????????? ?????????? ???????????? ?????? ???????? ?? ???????? ?????? ???? ???????????? ????????????.`,
        iconClassPng: ManageStudentsPng,
        iconClassWebp: ManageStudentsWebp,
        key: 4
    },
    {
        title: `?????????? ??????????`,
        desc: `???????????? ?????????????? ???????? ???? ???????? ?????????? ?????????? ???? ?????????? ?? ???????? ???? ?????? ?????????? ?????? ?????????? ??????????. ?????? ?????? ???????? ???? ?????? ?????????? ???????????? ?? ?????????? ???????????????? ?????????? ?????????? ????.`,
        iconClassPng: DefineMeetingPng,
        iconClassWebp: DefineMeetingWebp,
        key: 5
    },
    {
        title: `?????????? ???????????? ????????`,
        desc: `???? ?????? ?????????? ???????? ?? ???? ???????? ?????????????? ???? ???????? ???? ???????? ?????????????? ?????????? ?????????? ????. ?????????? ????????????????? ?????????? ?????? ???? ???????? ?? ??????????????????? ???? ?????? ?????? ???? ???????? ???????? ???????? ???????? ?????????? ??????????????? ???????????? ???? ?????????? ?????????? ??????.`,
        iconClassPng: AutoGeneratePng,
        iconClassWebp: AutoGenerateWebp,
        key: 6
    },
    
    
    
]
export const questions = [
    {
        title: `?????????? ?????????? ???? ???????? ???????????? ?????? ?????????????? ???????? ???????????? ??????????`,
        key: 1,
        number: `??`,
        legend: `?????????? ???????? ???? ?????????? ???????????? ?????? ?? ?????????? ???????? ???????? ???????? ???????????? ???? ?????? ???? ???? ???????? ???????????? ???????? ?????????? ?? ???????????? ?????????? ???? ???????? ?????????????? ?????????? ???? ?????? ?? ???????? ?????? ?????? ?????? ???????? ?? ?????????? ?????????? ???? ?????????? ???? ?????? ?????? ?????????? ?????????? ???? ?????????? ???????? ???????????? ????????`
    },
    {
        title: `?????????? ???? ???????? ???????? ?????????? ??????????`,
        key: 2,
        number: `??`,
        legend: `???????????? ???? ???????? ???????? ?????? ???? ?????????? "???????? ????????" ???? ???????????? ????????????. ?????? ?????????? ???????? ???? ???? ?????????? ???????? ???? ???????? ???????????????????? ???????????? ????????????. ???????????? ?? ?????????? ?? ?????????? ???????? ?????????????? ???? ???????? ????????????. ???????? ???? ???????????? ?????????? ????`

    },
    {
        title: `???????? ?????????????? ???? ?????????? ???? ???????? ???????? ??????????`,
        key: 3,
        number: `??`,
        legend: `?????????? ?????????? ???????? ???????????????? ???? ?????????? ???????? ?????????? ???????? ?????????? ???????? ?????????????? ???????? ???? ???? ???????? ?????????? ????????. ???????????? ?????? ?????????? ???????? ???????? ?????????? ???? ???????? ?????????? ???? ?????????? ???????? ?????????? ???? ???????????? ?????????? ???????? ???????? ???? ???????? ???????? ???????????? ???? ???????? ?????????????? ???????? ?????????? ???????? ???????? ???????? ??????.`

    },
    {
        title: `???????????? ???? ???? ???????? ?????????? ???????????? ???? ??????????`,
        key: 4,
        number: `??`,
        legend: `???? ?????????? ?????????? ???????? ???? ???????? ?????? ?????????? ???????????? ???? ???????? ?????????? ?????? ???????? ?????????? ???? ???????? ?????????? ???????? ?????? ???????????? ????????. ?????? ???? ?????? ?????????? ???? ???????? ???????? ???????? ?????? ?????????? ???????????????? ???? ???????? ?????? ?????? ???? ???????? ?????????? ???????????? ?????? ???? ???? ???????????? ????????. ???????????? ?????????? ???? ???? ???????? ???????????? 4 ?????????? ???????? ?????? ?????? ?? ???????? ???? ???? ???????? ?????? ???? ???????????? ???? ?????? ?????????? ??????.`
    },
]
export const badAssessmentReasonsObj = [
    {
        'id': 1,
        'text': ' ?????? ?????????? ???? ???????????? ???? ???????? ???????? ?? ???????? ???? ???? ???? ????????'
    },
    {
        'id': 2,
        'text': ' ???????????? ?????? ?????????? ?????? ?????????? ???? ?????????? ??????'
    },
    {
        'id': 3,
        'text': ' ???? ???????????? ?????????? ???? ???????? ??????????'
    },
    {
        'id': 4,
        'text': '????????'
    }
]
export const tariffs = [
    {
        name: ` ??????????`,
        id: 1,
        desc: ` ???????????? ?? ?????????? ????????????`,
        price: `????????????`,
        features: [
            {
                name: `?????????? ???????? ?????????????? ??????????`,
                active: true
            },
            {
                name: `???????? ???????????? ?? ?????????? ????????????`,
                active: true
            },
            {
                name: `???????? ?????????????? ??????????????`,
                active: true
            },
            {
                name: `???? ?? ?????????? ????????????`,
                active: true
            },
            {
                name: `?????? ???????????? ?? ??????????????`,
                active: true
            },
            {
                name: `???????????????? ???? ??????????`,
                active: true
            },

        ]
    },
    {
        name: `???????? ??????????`,
        desc: ` ???????????? ???? ?????????? ????????????`,
        price: `??????????????`,
        id: 4,
        features: 
        [
            {
                name: `?????????? ???????? ?????????????? ??????????`,
                active: true
            },
            {
                name: `???????? ???????????? ???? ?????????? ????????????`,
                active: true
            },
            {
                name: `???????? ?????????????? ??????????????`,
                active: true
            },
            {
                name: `???? ?? ?????????? ????????????`,
                active: true
            },
            {
                name: `?????? ???????????? ?? ??????????????`,
                active: true
            },
            {
                name: `???????????????? ???? ??????????`,
                active: true
            },

        ]

    },

    {
        name: `???????? ??????????`,
        desc: ` ???????????? ???? ?????????? ????????????`,
        price: `??????????????`,
        id: 6,
        features: 
        [
            {
                name: `?????????? ???????? ?????????????? ??????????`,
                active: true
            },
            {
                name: `???????? ???????????? ???? ?????????? ????????????`,
                active: true
            },
            {
                name: `???????? ?????????????? ??????????????`,
                active: true
            },
            {
                name: `???? ?? ?????????? ????????????`,
                active: true
            },
            {
                name: `?????? ???????????? ?? ??????????????`,
                active: true
            },
            {
                name: `???????????????? ???? ??????????`,
                active: true
            },

        ]

    },
    {
        name: `??????????`,
        desc: ` ???????????? ???? ?????????? ????????????`,
        price: `??????????????`,
        id: 7,
        features: 
        [
            {
                name: `?????????? ???????? ?????????????? ??????????`,
                active: true
            },
            {
                name: `???????? ???????????? ???? ?????????? ????????????`,
                active: true
            },
            {
                name: `???????? ?????????????? ??????????????`,
                active: true
            },
            {
                name: `???? ?? ?????????? ????????????`,
                active: true
            },
            {
                name: `?????? ???????????? ?? ??????????????`,
                active: true
            },
            {
                name: `???????????????? ???? ??????????`,
                active: true
            },

        ]

    },
    {
        name: ` ?????????? ????????`,
        desc: ` ???????????? ?????? ?????????? ????????????`,
        price: `??????????????`,
        id: 8,
        features: [
            {
                name: `?????????? ???????? ?????????????? ??????????`,
                active: true
            },
            {
                name: `???????? ???????????? ?????? ?????????? ????????????`,
                active: true
            },
            {
                name: `???????? ?????????????? ??????????????`,
                active: true
            },
            {
                name: `???? ?? ?????????? ????????????`,
                active: true
            },
            {
                name: `?????? ???????????? ?? ??????????????`,
                active: true
            },
            {
                name: `???????????????? ???? ??????????`,
                active: true
            },

        ]

    },
    {
        name: `?????????? ??????????`,
        desc: ` ???????????? ?????? ?????????? ????????????`,
        price: `??????????????????`,
        id: 9,
        features: [
            {
                name: `?????????? ???????? ?????????????? ??????????`,
                active: true
            },
            {
                name: `???????? ???????????? ?????? ?????????? ????????????`,
                active: true
            },
            {
                name: `???????? ?????????????? ??????????????`,
                active: true
            },
            {
                name: `???? ?? ?????????? ????????????`,
                active: true
            },
            {
                name: `?????? ???????????? ?? ??????????????`,
                active: true
            },
            {
                name: `???????????????? ???? ??????????`,
                active: true
            },

        ]

    },
    {
        name: `?????????? ????????`,
        desc: ` ???????????? ?????? ?????????? ???????????? `,
        price: `??????????????????`,
        id: 10,
        features: [
            {
                name: `?????????? ???????? ?????????????? ??????????`,
                active: true
            },
            {
                name: `???????? ???????????? ?????? ?????????? ????????????`,
                active: true
            },
            {
                name: `???????? ?????????????? ??????????????`,
                active: true
            },
            {
                name: `???? ?? ?????????? ????????????`,
                active: true
            },
            {
                name: `?????? ???????????? ?? ??????????????`,
                active: true
            },
            {
                name: `???????????????? ???? ??????????`,
                active: true
            },

        ]
    },
    {
        name: `????????????????`,
        desc: ` ???????????? ?????? ?????????? ????????????`,
        price: `??????????????????`,
        features: [
            {
                name: `?????????? ???????? ?????????????? ??????????`,
                active: true
            },
            {
                name: `???????? ???????????? ?????? ?????????? ????????????`,
                active: true
            },
            {
                name: `???????? ?????????????? ??????????????`,
                active: true
            },
            {
                name: `???? ?? ?????????? ????????????`,
                active: true
            },
            {
                name: `?????? ???????????? ?? ??????????????`,
                active: true
            },
            {
                name: `???????????????? ???? ??????????`,
                active: true
            },

        ]
    }
]
export const activityTariffs=[
    {
        userCount:5,
        price:10000
    },
    {
        userCount:15,
        price:20000
    },
    {
        userCount:30,
        price:35000
    },
    {
        userCount:60,
        price:60000
    },
    {
        userCount:100,
        price:90000
    },
    {
        userCount:200,
        price:150000
    },
    {
        userCount:300,
        price:200000
    },
    {
        userCount:500,
        price:300000
    }

]
export const faq = [
    {
        title: `?????????? ???????? ???????????? ???? ???????? ?????? ???? ???????????? ????????`,
        key: 1,
        number: `??`,
        legend: `?????????? ???????? ???? ?????? ?????????????? ?????? ???????????? ???????????? ?????? ?????? ???? ???????? ???? ???????????? ???????? ???????????? ???????? ???????? ???? ???? ???????????? ???????? ???? ?????? ?????????? ?????????????? ???????????? ???? ???? ???? ???????? ?????? ?????????? ???? ?????????? ?????????? ???? ????????. ???????????? ?????????? ???????????? ???????? ???? ?????? ?????? ?????????? ???????????? ????????????`
    },
    {
        title: `?????????? ?????????? ???????????? ???? ???????????? ???? ?????????? ???? ?????????????? ?????????? ?????? ??????????`,
        key: 2,
        number: `??`,
        legend: `?????? ??????????????????? ???????????? ?????????? ???? ?????????????? ?????? ?????????? ?????????? ???????? ???? ???? ????????????????? ?????????? ??????????? ???????? ?? ???????????? ????????. ?????? ??????????????? ???? ???????? ??????????????? ?????????? ????????????? ???????????? ?????????? ?????????????? ?????? ???? ???????????? ???? ???? ???? ???????????? ???????? ?????????? ?? ???? ?????????? ???????????? ?????????????? ??????????????? ???? ?????????? ?????? ???????????????? ???????? ???? ???????????? ???? ?????????? ?????? ?????????????? ???????????? ?????? ???????? ????????`

    },

    {
        title: `?????? ??????????????? ???? ???????????? ??????????????? ???????????? ?????? ?????????? ???????????????? ??????????`,
        key: 3,
        number: `??`,
        legend: `???????? ??????????????? ???? ???????? ?????????????? ?????????????? ????????????? ???? ?????????? ????????????????? ???? ???????????? ??????????????? ???????????? ?????? ?????????? ???????????????? ??????????. ?????????????? ???? ???? ???????? ?????? ???? ???????? ?????? ?????? ?????????? ?????? ?????? ???????????? ?????????? ???? ?????????? ?????????????? ?????????? ???????????? ???? ?????????? ???????????????.`

    },


    {
        title: `?????????? ???????????? ?????????? ???????? ?????????????????? ???????? ???????? ?????????? ???????????? ???????????????`,
        key: 4,
        number: `??`,
        legend: `???? ???? ???????? ???? ???????? ?????? ???? ?????????? ????????????????? ?????????????????? ???????? ???????? ???? ???????? ?????? ???????? ???? ???????? ?????? ???????? ????????????? ?? ???????????????? ?????????? ???????? ???? ?????? ???????????? ?????????????. ???? ?????????? ???????? ?????? ???? ???? ?????????? ??????????????? ???? ???????????? ???????????????????.`
    },


    {
        title: `?????? ???????????? ???? ???????? ???????????? ?????????????? ????????`,
        key: 5,
        number: `??`,
        legend: `?????? ?? ?????????? ???????? ???? ???????? ???????????? ???????? ?????????? ?? ?????? ???????????????? ???????? ?????????? ???? ?????????? ????????  ???? ?????????? ????????`
    },
    {
        title: `?????? ?????????? ???? ???????? ?????????? ?????????????? ???? ?????????? ?????? ???????????? ???? ?????????? ??????????? ???????? ??????????`,
        key: 6,
        number: `??`,
        legend: `???? ?????????? ????????????????? ???????????? ?????????????? ???????? ???? ?????????????? ???? ???????????? ???? ?????????? 24 ???????? ?????????? ?? ?????? ?????????? ?????????????? ???? ?????? ???????? ??????????.`
    },


    {
        title: `?????? ???????? ?????????????? ?????? ???????? ???????? ????????`,
        key: 7,
        number: `??`,
        legend: `???????? ???????? ?????????????? ?????? ???????? ???????? ?????????? ???????????????? ?????? ???? ???????? ???? ?????? ???????? ???? ?????????? ??????????????.`
    },



    {
        title: `?????? ???? ???????? ???????????? ?????? ?????????????? ?????????? ???????????? ???? ???? ???? ?????? ?????????????????`,
        key: 8,
        number: `??`,
        legend: `???????? ?????????? ???????????? ?????? ???? ?????????? ?????????????? ???? ?????? ?????????????? ???? ???????? ?????????????? ??????????.`
    },

    {
        title: `?????? ???????????? ???? ???????? ???????????? ???? ?????????? ??????????????? ?????????? ???????????????`,
        key: 9,
        number: `??`,
        legend: `???????? ??????????????????? ?????????? ?????? ???????? ???? ?????? ?????????? ???????????? ???? ???????? ???????????? ???????????????.`
    },

]


export const dashboardItems = [
    {
        title: '???????? ?????? ????',
        desc: `???? ?????????? ???? ???????? ???????? ???????? ???? ???? ???? ?????? ???????????? ???????????? ???????????? ????????. ???? ???????????? ???????????????????? ???? ?? ?????????? ?????????? ???????? ???? ???????????? ?? ???? ???????? ???????? ???? ???????? ???????? ???????? `
        ,
        detailText: '???????? ????????',
        detailPrefix: '',
        link: ['????????????', '/profile/dashboard/myClass'],
        icon: blackboard,
        type: 'groupCount'
    },
    {
        title: '???????? ????',
        desc:
            `?????? ???????????????? ???????????? ???????? ?????????????? ?????????? ?? ???????????????????? ????
            ?????????? ?? ???????? ???? ???????????? ?????????? ???? ?????????? ???????????? ???????? ??????????.
            ???????? ???????????? ???????? ?????? ?????? ???? ?????? ???? ???? ???? ???????? ???????? ?????? ??????????????
            ????????

    `
        ,
        detailText: '?????? ?????????? ???? ?????????? ???????? ????????',
        link: ['????????????', '/profile/dashboard/packets'],
        icon: gift,
        type: 'packetRemainedTime',
        detailPrefix: '',


    },
    {
        title: '????????????',
        desc:
            `
        ???????? ???????????? ?? ???? ???????????? ???????? ???? ?????????? ???? ???????????? ???? ?????? ?????? ?????????? ?????????????? ?????????? ???????????? ???? ???? ???????????? ???????? ???? ???????????? ???? ???? ???? ???????? ?????????? ?????? ?????????? ????????
        
        `
        ,
        detailText: '?????????? ',
        link: ['????????????', '#'],
        icon: wallet,
        type: 'credit',
        detailPrefix: '???????????? ??????: ',


    },
    {
        title: '???????????? ????',
        desc: '???????????? ?? ?????????????????? ???? ???? ???????? ???????? ?????????? ???? ???????? ???? ???????? ???????????? ?????????? ???????? ?????? ???? ???????? ?????? ???????? ???? ???????????? ??????????        '
        ,
        detailText: '????????',
        link: ['????????????', '/profile/dashboard/activity'],
        icon: activity,
        type: 'activityCount',
        detailPrefix: ''
    },

]

export const dashboardMenu = [

    {
        title: '??????????????',
        icon: <ProfileSidebar />,
        link: '/profile/adviser/dashboard',
        role: 2861
    },
    {
        title: '???????? ????',
        icon: <PacketSidebar />,
        link: '/profile/dashboard/packets',
        role: 0
    },
    // {
    //     title: '???????????? ?????? ????',
    //     icon: <StarSidebar />,
    //     link: '/profile/dashboard/opinions',
    //     role: 2861
    // },
    {
        title: '???????? ?????? ????',
        icon: <BlackboardSidebar />,
        link: '/profile/dashboard/myClass',
        role: 0
    },
    {
        title: '??????????????',
        icon: <ContactSidebar />,
        link: '/profile/dashboard/contacts',
        role: 0
    },
    {
        title: '???????????? ?????? ????',
        icon: <CheckList />,
        link: '/profile/dashboard/activity',
        role: 0
    },
    // {
    //     title: '????????????',
    //     icon: <WalletSidebar />,
    //     link: '#',
    //     role: 0
    // },

    // {
    //     title: '???????? ?????? ????',
    //     icon: <BookmarkSidebar />,
    //     link: '/profile/dashboard/favorite',
    //     role: 0
    // }, 
    // {
    //     title: '???????????? ?????? ????',
    //     icon: <CommentSidebar />,
    //     link: '/profile/dashboard/comments',
    //     role: 0
    // }, 
    // {
    //     title: '?????? ?????? ???? ?????????? ??????????',
    //     icon: <OstadSidebar />,
    //     link: '/profile/dashboard/register',
    //     role: 2891
    // }
]