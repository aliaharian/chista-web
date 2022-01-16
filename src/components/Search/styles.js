import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  searchBoxWrapper: {
    display: "flex",
    height: 60,
    borderRadius: 12,
    border: 'solid 1px rgba(20, 23, 26, 0.12)',
    backgroundColor: '#ffffff',
  },
  categoryBtn: {
    '&.MuiButton-root':{
      minWidth: "204px",
      height: "100%",
      padding: "5px 5px 5px 20px !important",
      color: "#314351 !important",
      fontSize: 15,
      fontFamily: 'yekanB',
      fontWeight: "bold",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: '0 3px 9px 0 rgba(12, 0, 50, 0.08)',
      backgroundColor: '#F4F7F8',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 12,
      borderRight: 'solid 1px rgba(0, 0, 0, 0.05)',
    },
    svg: {
      transition: "all 200ms",
      transform: "rotate(45deg)",
    },
  },
  textCategory:{
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  openCategoryArrow: {
    transform: "rotate(180deg)",
    transition: "all 200ms",
  },
  searchBox: {
    position: "relative",
    width: "100%",
    marginTop: 23,
  },
  courseWrapper: {
    marginTop: 6,
    width: "76%",
    margin: "0 0 0 auto",
    height: 387,
    borderRadius: 8,
    boxShadow: "0 5px 10px 0 rgba(0, 5, 52, 0.11)",
    overflowY: "scroll",
    position: "absolute",
    right: 0,
    zIndex: 9,
    background: "#fff",
    '& .MuiCheckbox-root': {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      width: "100%",
    },
  },
  searchInput: {
    padding: "0 10px 0 24px !important",
    width: "100%",
    justifyContent: 'center',
    '& input':{
      color: '#0c0b31cc',
      fontSize: 15,
      fontFamily: 'yekanLight',
    },
    "&:hover": {
      "&:before": {
        borderBottom: "none !important",
      },
    },
    "&:before": {
      content: "",
      border: "none",
      right: 0,
      left: 0,
      position: "absolute",
      bottom: 0,
    },
    "&:after": {
      content: "",
      border: "none",
      right: 0,
      left: 0,
      position: "absolute",
      bottom: 0,
    },
  },
  sectionDesktop: {
    [theme.breakpoints.down('md')]: {
      display: 'none !important',
    },
  },
  sectionMobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  advRootContainer: {
    alignItems: "center",
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    display: "flex",
    marginTop: 24,
    '& img':
    {
      width: 15,
      height: 15,
      marginRight: 6
    },
    '& p': {
      fontSize: 14,
      color: "#808895",
      display: "flex",
    }
  }
}));
