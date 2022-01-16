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
        title: `بورد تعاملی`,
        desc: `محیطی نامحدود برای تولید، نگهداری و ارائه محتوای آموزشی است که ارائه دهنده را قادر می سازد با نمایش و حرکت روی محتوا، کیفیت و اثر بخشی کلاس مجازی را افزایش دهد.`,
        iconClassPng: BoardWebPng,
        iconClassWebp: BoardWebWebp,
        key: 1
    },
    {
        title: `ارتباط تصویری`,
        desc: `صدا و تصویر واضح و با کیفیت را به واسطه سامانه و سرورهای قدرتمند چیستا تجربه خواهید کرد. برای تعامل بیشتر میتوانید تا چهار ویدیوی همزمان را در کلاس خود داشته باشید`,
        iconClassPng: VideoWebPng,
        iconClassWebp: VideoWebWebp,
        key: 2
    },
    {
        title: `اشتراک صفحه`,
        desc: `در هنگام کلاس علاوه بر صدا و تصویر خود، عکسها ، فایل ها ، ویدیو یا هر آنچه در صفحه موبایل یا کامپیوتر است به دیگران نمایش دهید.`,
        iconClassPng: ShareScreenPng,
        iconClassWebp: ShareScreenWebp,
        key: 3
    }
]
export const etcFeaturesObj = [
    {
        title: `حضور و غیاب هوشمند`,
        desc: `آنلاین بودن در کلاسهای مجازی به معنای حضور نیست! این امکان منحصر بفرد با استفاده از یک الگوریتم پیشرفته به اساتید و مراکز آموزشی اجازه می دهد شاخص توجه هر دانشپذیر در کلاس را برآورد نماید و از حضور واقعی بر سر کلاسها مطمئن شود.`,
        iconClassPng: RollCallPng,
        iconClassWebp: RollCallWebp,
        key: 1
    },
    {
        title: `نگهداری محتوای آموزشی`,
        desc: `تمامی شرکت کنندگان همیشه و حتی خارج از ساعت کلاس درس می‌توانند جزوات، تصاویر و نوشته‌های ارائه شده را در اختیار داشته و مطالعه نمایند`,
        iconClassPng: KeepDataPng,
        iconClassWebp: KeepDataWebp,
        key: 2
    },
    {
        title: `تکلیف و آزمون`,
        desc: `چیستا این امکان را فراهم آورده تا اساتید بتوانند آزمون‌ها و تکالیف هر کلاس را بصورت آنلاین تعریف ، اجرا و تصحیح نمایند.`,
        iconClassPng: HomeworkPng,
        iconClassWebp: HomeworkWebp,
        key: 3
    },
    {
        title: `مدیریت و گزارش‌گیری`,
        desc: `اساتید و مدیران می‌توانند در هر لحظه ورود، خروج و دسترسی شرکت کنندگان را کنترل کرده و گزارش‌هایی مانند تاخیر، مدت حضور و شاخص دقت را ملاحظه نمایند.`,
        iconClassPng: ManageStudentsPng,
        iconClassWebp: ManageStudentsWebp,
        key: 4
    },
    {
        title: `تعریف جلسات`,
        desc: `میزبان میتواند برای هر کلاس جلسات مشخصی با تاریخ و ساعت از پیش تعیین شده تعریف نماید. این کار منجر به نظم بیشتر کلاسها و تولید گزارشهای مختلف خواهد شد.`,
        iconClassPng: DefineMeetingPng,
        iconClassWebp: DefineMeetingWebp,
        key: 5
    },
    {
        title: `تشکیل خودکار گروه`,
        desc: `به محض ایجاد کلاس و به صورت خودکار، یک گروه در قسمت گفتگوها ایجاد خواهد شد. تمامی پیام‌های ارسال شده در کلاس و پیام‌هایی که حتی بعد از زمان کلاس توسط اعضا ارسال می‌شود، همواره در دسترس خواهد بود.`,
        iconClassPng: AutoGeneratePng,
        iconClassWebp: AutoGenerateWebp,
        key: 6
    },
    
    
    
]
export const questions = [
    {
        title: `تفاوت چیستا با سایر پلتفرم های برگزاری کلاس آنلاین چیست؟`,
        key: 1,
        number: `۱`,
        legend: `چیستا تنها یک ابزار انتقال صوت و تصویر نیست بلکه تنها سامانه ای است که یک بورد تعاملی برای ارائه و مشاهده محتوا به شرکت کنندگان ارائه می دهد و برای این جهت اثر بخشی و کیفیت آموزش در چیستا با هیچ نرم افزار داخلی یا خارجی قابل مقایسه نیست`
    },
    {
        title: `چگونه یک کلاس جدید تشکیل دهیم؟`,
        key: 2,
        number: `۲`,
        legend: `کافیست در قسمت کلاس های من گزینه "کلاس جدید" را انتخاب نمایید. سپس اعضای کلاس را با اضافه کردن از لیست مخاطبینتان انتخاب نمایید. دستیار و استاد و تعداد شرکت کنندگان را مشخص نمایید. کلاس با موفقیت ایجاد شد`

    },
    {
        title: `شرکت کنندگان را چگونه به کلاس دعوت کنیم؟`,
        key: 3,
        number: `۳`,
        legend: `هنگام تعریف کلاس میتوانید با اضافه کردن شماره تلفن همراه شرکت کنندگان آنها را به کلاس اضافه کنید. همچنین اگر امکان ورود شرکت کننده به صورت مهمان را دنبال کرده باشید با اشتراک گذاری آدرس کلاس از طریق صفحه جزئیات هر فردی میتواند بدون احراز هویت وارد کلاس شود.`

    },
    {
        title: `دسترسی ها در کلاس چگونه مدیریت می شوند؟`,
        key: 4,
        number: `۴`,
        legend: `در هنگام اجرای کلاس با کلیک روی آیکون جزئیات در گوشه پایین سمت راست صفحه، به لیست اعضای کلاس دست خواهید یافت. اگر با نقش استاد یا ناظر وارد کلاس شده باشید میتوانید با کلیک روی نام هر شرکت کننده دسترسی های آن را ویرایش کنید. فراموش نکنید در یک کلاس حداکثر 4 ویدیو قابل پخش است و بورد در هر لحظه فقط در اختیار یک نفر خواهد بود.`
    },
]
export const badAssessmentReasonsObj = [
    {
        'id': 1,
        'text': ' این مقاله به سوالات من پاسخ نداد و مشکل من را حل نکرد'
    },
    {
        'id': 2,
        'text': ' خواندن این مقاله گیج کننده یا دشوار است'
    },
    {
        'id': 3,
        'text': ' من کارکرد ویژگی را دوست ندارم'
    },
    {
        'id': 4,
        'text': 'دیگر'
    }
]
export const tariffs = [
    {
        name: ` خصوصی`,
        id: 1,
        desc: ` حداکثر ۵ کاربر همزمان`,
        price: `۶۹،۰۰۰`,
        features: [
            {
                name: `تعریف کردن نامحدود کاربر`,
                active: true
            },
            {
                name: `حضور حداکثر ۵ کاربر همزمان`,
                active: true
            },
            {
                name: `زمان برگزاری نامحدود`,
                active: true
            },
            {
                name: `تا ۴ ویدیو همزمان`,
                active: true
            },
            {
                name: `پنل مدیریت و گزارشات`,
                active: true
            },
            {
                name: `پشتیبانی ۲۴ ساعته`,
                active: true
            },

        ]
    },
    {
        name: `نیمه خصوصی`,
        desc: ` حداکثر ۱۵ کاربر همزمان`,
        price: `۱۶۹،۰۰۰`,
        id: 4,
        features: 
        [
            {
                name: `تعریف کردن نامحدود کاربر`,
                active: true
            },
            {
                name: `حضور حداکثر ۱۵ کاربر همزمان`,
                active: true
            },
            {
                name: `زمان برگزاری نامحدود`,
                active: true
            },
            {
                name: `تا ۴ ویدیو همزمان`,
                active: true
            },
            {
                name: `پنل مدیریت و گزارشات`,
                active: true
            },
            {
                name: `پشتیبانی ۲۴ ساعته`,
                active: true
            },

        ]

    },

    {
        name: `نیمه گروهی`,
        desc: ` حداکثر ۳۰ کاربر همزمان`,
        price: `۲۹۹،۰۰۰`,
        id: 6,
        features: 
        [
            {
                name: `تعریف کردن نامحدود کاربر`,
                active: true
            },
            {
                name: `حضور حداکثر ۳۰ کاربر همزمان`,
                active: true
            },
            {
                name: `زمان برگزاری نامحدود`,
                active: true
            },
            {
                name: `تا ۴ ویدیو همزمان`,
                active: true
            },
            {
                name: `پنل مدیریت و گزارشات`,
                active: true
            },
            {
                name: `پشتیبانی ۲۴ ساعته`,
                active: true
            },

        ]

    },
    {
        name: `گروهی`,
        desc: ` حداکثر ۶۰ کاربر همزمان`,
        price: `۴۹۹،۰۰۰`,
        id: 7,
        features: 
        [
            {
                name: `تعریف کردن نامحدود کاربر`,
                active: true
            },
            {
                name: `حضور حداکثر ۶۰ کاربر همزمان`,
                active: true
            },
            {
                name: `زمان برگزاری نامحدود`,
                active: true
            },
            {
                name: `تا ۴ ویدیو همزمان`,
                active: true
            },
            {
                name: `پنل مدیریت و گزارشات`,
                active: true
            },
            {
                name: `پشتیبانی ۲۴ ساعته`,
                active: true
            },

        ]

    },
    {
        name: ` مراکز کوچک`,
        desc: ` حداکثر ۱۰۰ کاربر همزمان`,
        price: `۶۴۹،۰۰۰`,
        id: 8,
        features: [
            {
                name: `تعریف کردن نامحدود کاربر`,
                active: true
            },
            {
                name: `حضور حداکثر ۱۰۰ کاربر همزمان`,
                active: true
            },
            {
                name: `زمان برگزاری نامحدود`,
                active: true
            },
            {
                name: `تا ۴ ویدیو همزمان`,
                active: true
            },
            {
                name: `پنل مدیریت و گزارشات`,
                active: true
            },
            {
                name: `پشتیبانی ۲۴ ساعته`,
                active: true
            },

        ]

    },
    {
        name: `مراکز متوسط`,
        desc: ` حداکثر ۲۰۰ کاربر همزمان`,
        price: `۱،۰۹۹،۰۰۰`,
        id: 9,
        features: [
            {
                name: `تعریف کردن نامحدود کاربر`,
                active: true
            },
            {
                name: `حضور حداکثر ۲۰۰ کاربر همزمان`,
                active: true
            },
            {
                name: `زمان برگزاری نامحدود`,
                active: true
            },
            {
                name: `تا ۴ ویدیو همزمان`,
                active: true
            },
            {
                name: `پنل مدیریت و گزارشات`,
                active: true
            },
            {
                name: `پشتیبانی ۲۴ ساعته`,
                active: true
            },

        ]

    },
    {
        name: `مراکز بزرگ`,
        desc: ` حداکثر ۳۰۰ کاربر همزمان `,
        price: `۱،۳۹۹،۰۰۰`,
        id: 10,
        features: [
            {
                name: `تعریف کردن نامحدود کاربر`,
                active: true
            },
            {
                name: `حضور حداکثر ۳۰۰ کاربر همزمان`,
                active: true
            },
            {
                name: `زمان برگزاری نامحدود`,
                active: true
            },
            {
                name: `تا ۴ ویدیو همزمان`,
                active: true
            },
            {
                name: `پنل مدیریت و گزارشات`,
                active: true
            },
            {
                name: `پشتیبانی ۲۴ ساعته`,
                active: true
            },

        ]
    },
    {
        name: `سازمانها`,
        desc: ` حداکثر ۵۰۰ کاربر همزمان`,
        price: `۱،۹۹۹،۰۰۰`,
        features: [
            {
                name: `تعریف کردن نامحدود کاربر`,
                active: true
            },
            {
                name: `حضور حداکثر ۵۰۰ کاربر همزمان`,
                active: true
            },
            {
                name: `زمان برگزاری نامحدود`,
                active: true
            },
            {
                name: `تا ۴ ویدیو همزمان`,
                active: true
            },
            {
                name: `پنل مدیریت و گزارشات`,
                active: true
            },
            {
                name: `پشتیبانی ۲۴ ساعته`,
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
        title: `چگونه بسته متناسب با نیاز خود را انتخاب کنم؟`,
        key: 1,
        number: `۱`,
        legend: `بررسی کنید در پیک کلاسهای شما مجموعا حداکثر چند نفر در کلاس ها همزمان شرکت خواهند کرد، بسته ای را انتخاب کنید که سقف تعداد کاربران همزمان در آن از نیاز شما بیشتر یا حداقل برابر آن باشد. فراموش نکنید اساتید کلاس را نیز جزو نفرات محاسبه نمایید`
    },
    {
        title: `تعداد کاربر همزمان چه تفاوتی با تعداد کل کاربران تعریف شده دارد؟`,
        key: 2,
        number: `۲`,
        legend: `شما می‌توانید بیشمار کاربر در مخاطبین خود اضافه کنید، آنها را در کلاس‌های مختلف گروه‌ بندی و مدیریت کنید. نوع بسته‌ای که تهیه می‌کنید تعیین می‌کند حداکثر تعداد مخاطبین شما که همزمان با هم در کلاسها حضور دارند و از خدمات آموزشی استفاده می‌کنند چه تعداد است بنابراین بسته را متناسب با تعداد پیک کاربران همزمان خود تهیه کنید`

    },

    {
        title: `آیا بسته‌ای که انتخاب می‌کنیم تاثیری روی کیفیت پشتیبانی دارد؟`,
        key: 3,
        number: `۳`,
        legend: `خیر، بسته‌ای که توسط کاربران خریداری می‌شود یا مقدار هزینه‌ای که پرداخت می‌کنند تاثیری روی کیفیت پشتیبانی ندارد. همکاران ما در واحد فنی در تمام طول مدت شبانه روز حتی روزهای تعطیل به تمامی کاربران خدمات یکسانی را ارائه می‌دهند.`

    },


    {
        title: `هنگام ارتقای بسته، مبلغ باقیمانده بسته فعلی چگونه محاسبه می‌شود؟`,
        key: 4,
        number: `۴`,
        legend: `در هر لحظه که بسته خود را ارتقا می‌دهید، باقیمانده بسته قبلی به صورت روز شمار به حساب شما عودت می‌شود و بلافاصله هزینه جدید از شما دریافت می‌شود. به عبارت دیگر شما ما به تفاوت بسته‌ها را پرداخت می‌نمایید.`
    },


    {
        title: `آیا میتوان دو بسته همزمان خریداری کرد؟`,
        key: 5,
        number: `۵`,
        legend: `خیر ، امکان خرید دو بسته همرمان وجود ندارد ، شما میتوانید بسته موجود را ارتقا داده  یا تمدید کنید`
    },
    {
        title: `آیا تعداد یا زمان ساعات استفاده در شبانه روز تاثیری در اتمام بسته‌ فعال دارد؟`,
        key: 6,
        number: `۶`,
        legend: `در تمامی بسته‌های ماهانه کاربران مجاز به استفاده از سامانه در تمامی 24 ساعت هستند و این موضوع ارتباطی با نوع بسته ندارد.`
    },


    {
        title: `آیا بسته خریداری شده قابل عودت است؟`,
        key: 7,
        number: `۷`,
        legend: `خیر، بسته خریداری شده قابل عودت نیست، بنابراین قبل از تهیه آن دقت لازم را مبذول فرمایید.`
    },



    {
        title: `اگر از بسته ماهانه خود استفاده نکنیم اعتبار آن به ما باز می‌گردد؟`,
        key: 8,
        number: `۸`,
        legend: `خیر، هزینه دریافت شده به میزان استفاده یا عدم استفاده از بسته ارتباطی ندارد.`
    },

    {
        title: `آیا مالیات بر ارزش افزوده به هزینه بسته‌ها اضافه می‌شود؟`,
        key: 9,
        number: `۹`,
        legend: `بله، هزینه‌های اعلام شده بدون در نظر گرفتن مالیات بر ارزش افزوده می‌باشد.`
    },

]


export const dashboardItems = [
    {
        title: 'کلاس های من',
        desc: `از اینجا به تمام کلاس هایی که در آن عضو هستید، دسترسی خواهید داشت. می توانید اعضا،گزارش ها و آخرین وضعیت کلاس را ببینید و در صورت نیاز در کلاس شرکت کنید `
        ,
        detailText: 'کلاس فعال',
        detailPrefix: '',
        link: ['مشاهده', '/profile/dashboard/myClass'],
        icon: blackboard,
        type: 'groupCount'
    },
    {
        title: 'بسته ها',
        desc:
            `اگر میخواهید خودتان کلاس بسازید، استاد و دانشپذیران را
            تعیین و آنها را مدیریت کنید، می بایست میزبان کلاس باشید.
            برای اینکار لازم است یکی از پلن ها را بر اساس نیاز خود خریداری
            کنید

    `
        ,
        detailText: 'روز مانده به پایان بسته جاری',
        link: ['مشاهده', '/profile/dashboard/packets'],
        icon: gift,
        type: 'packetRemainedTime',
        detailPrefix: '',


    },
    {
        title: 'اعتبار',
        desc:
            `
        برای پرداخت و یا دریافت مبلغ در چیستا می توانید از کیف پول مجازی استفاده کنید، اعتبار آن را افزایش دهید یا موجودی آن را به حساب بانکی خود منتقل کنید
        
        `
        ,
        detailText: 'تومان ',
        link: ['مشاهده', '#'],
        icon: wallet,
        type: 'credit',
        detailPrefix: 'اعتبار شما: ',


    },
    {
        title: 'فعالیت ها',
        desc: 'تکالیف و آزمونهایی که در آنها شرکت دارید یا آنها را برای دیگران طراحی کرده اید از طریق این صفحه در اختیار شماست        '
        ,
        detailText: 'مورد',
        link: ['مشاهده', '/profile/dashboard/activity'],
        icon: activity,
        type: 'activityCount',
        detailPrefix: ''
    },

]

export const dashboardMenu = [

    {
        title: 'پروفایل',
        icon: <ProfileSidebar />,
        link: '/profile/adviser/dashboard',
        role: 2861
    },
    {
        title: 'بسته ها',
        icon: <PacketSidebar />,
        link: '/profile/dashboard/packets',
        role: 0
    },
    // {
    //     title: 'امتیاز های من',
    //     icon: <StarSidebar />,
    //     link: '/profile/dashboard/opinions',
    //     role: 2861
    // },
    {
        title: 'کلاس های من',
        icon: <BlackboardSidebar />,
        link: '/profile/dashboard/myClass',
        role: 0
    },
    {
        title: 'مخاطبین',
        icon: <ContactSidebar />,
        link: '/profile/dashboard/contacts',
        role: 0
    },
    {
        title: 'فعالیت های من',
        icon: <CheckList />,
        link: '/profile/dashboard/activity',
        role: 0
    },
    // {
    //     title: 'اعتبار',
    //     icon: <WalletSidebar />,
    //     link: '#',
    //     role: 0
    // },

    // {
    //     title: 'نشان شده ها',
    //     icon: <BookmarkSidebar />,
    //     link: '/profile/dashboard/favorite',
    //     role: 0
    // }, 
    // {
    //     title: 'دیدگاه های من',
    //     icon: <CommentSidebar />,
    //     link: '/profile/dashboard/comments',
    //     role: 0
    // }, 
    // {
    //     title: 'ثبت نام به عنوان استاد',
    //     icon: <OstadSidebar />,
    //     link: '/profile/dashboard/register',
    //     role: 2891
    // }
]