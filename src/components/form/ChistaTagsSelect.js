import React, {useEffect,useState} from "react"
import {
  Typography,
} from "@material-ui/core"
import {makeStyles} from "@material-ui/styles";

const useStyles= makeStyles(theme => ({
    item:{
       width:"auto",
       height:"33px",
       minWidth:"50px",
       margin:3,
        cursor:'pointer',
       backgroundColor:"#fff",
       border:"1px solid rgba(189, 200, 214, 0.4)",
       display:"flex",
       alignItems:"center",
       justifyContent:"center",
       borderRadius:"10px",
       '& span':
       {
           fontFamily:theme.font.regular,
           color:"#536b88",
           fontSize:"13px"
       }
    },
    selected:{
        border:"1px solid #1641ff",
        '& span':
            {
                color:"#1641ff",
            }
    },
    root:
    {
        width:"100%",
        height:'auto',
        minHeight:'200px',
        backgroundColor:'rgba(213, 223, 235, 0.22)',
        borderRadius:"13px",
        display:'flex',
        flexDirection:"column",
        padding:18
    },
    itemsTitle:{
        fontFamily:theme.font.regular,
        fontSize:15,
        color:'#536b88',
        fontWeight:'bold',
    },
    itemContainer:
    {
        display:"flex",
        flexDirection:"column",
    },
    subItemsContainer:
    {
        display:"flex",
        marginTop:15,
        flexWrap: "wrap",
    },
}));

const ChistaTagsSelect = ({ input, options, seledtedTags }) => {

    const [selectedItems, setSelectedItems] = useState(seledtedTags || []);

    const classes=useStyles();
    useEffect(() => {
        setSelectedItems(seledtedTags || []);
    }, [seledtedTags])

    function handleChange(value){
        try{
        let tempSelected=[...selectedItems];
        let index = tempSelected.indexOf(value);

        if (index === -1) 
            tempSelected.push(value);
        else 
            tempSelected.splice(index, 1);

        setSelectedItems(tempSelected);
        input.onChange(tempSelected)

        }catch(e){}
    };
    return(
        <div className={classes.root} >
                {options.map((item)=>(
                    <div className={classes.itemContainer} key={'itemc'+item.id}>
                        <Typography className={classes.itemsTitle}  key={'itemt'+item.id}>{item.name}</Typography>
                        <div className={classes.subItemsContainer} key={'itemsc'+item.id}>
                            {item.subList&&item.subList.map((subItem)=>(
                                <div key={'sitem'+subItem.id} className={[classes.item,selectedItems.indexOf(subItem.id)!==-1?classes.selected:''].join(' ')} onClick={()=>{handleChange(subItem.id)}}>
                                    <span key={'sitemname'+subItem.id}>{subItem.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default ChistaTagsSelect
