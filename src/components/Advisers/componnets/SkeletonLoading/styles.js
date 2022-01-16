import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  dummyArea:{
    backgroundColor:'gray'
  },
  root:{
    margin:'15px auto'
  },
  sklItem:{
    padding:"5px 5px"
  },
  itemRoot:{
    backgroundColor:"#fff",
    borderRadius:"15px",
    height:"170px",
    width:'100%',
    padding:18,
    border:"1px solid rgb(146,164,187,.3)"
  },
  itemTop:{
    display:"flex",
    justifyContent:"space-between",
    flexBasis:"100%"
  },
  itemDetailRoot:
  {
    display:"flex",
    flexDirection:"column",
    flexGrow: 1,
    marginTop:"20px",
    marginLeft:"9px"
  },
  itemDetailTop:
  {
    display:"flex",
    justifyContent:"space-between",
    flexGrow:1,
  },
  itemDetailBottom:
  {
    display:"flex",
    justifyContent:"space-between",
    flexGrow:1,
    flexBasis:"100%",
    marginTop:9,
  },
  divider:
  {
    width:"100%",
    backgroundColor:"#EDF0F4",
  },
  itemBottom:
  {
    display:"flex",
    justifyContent:"space-between",
    flexGrow:1
  },
  itemBottomLeft:
  {
    display:"flex",
    justifyContent:"space-between"
  },
  itemBottomRight:
  {
    display:"flex",
    justifyContent:"space-between"
  }
}));
