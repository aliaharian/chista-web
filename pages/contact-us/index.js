import React, {Component} from 'react';
import {Container, Grid, Button} from '@material-ui/core'
import Layout from "../../src/components/HomePage/Layout/Layout";
import Style from "../../src/assets/stylesheet/contact.module.scss";
import Head from "next/head";
import axios from "axios";
import {withSnackbar} from 'notistack';
import {numberFormat} from "../../src/utilities";
import ArrowLeft from "../../src/assets/images/homepageArrowLeft.svg";

let numberRegex = /^[0-9\b]+$/

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            company: '',
            phone: '',
            email: '',
            desc: '',
            err: [false, false, false, false, false]
        }
        this.sendContact = this.sendContact.bind(this);
        this.updateFields = this.updateFields.bind(this);
    }


    updateFields(e) {
        if (e.target.id === 'phone') {
            if ((numberRegex.test(numberFormat.toEnglishDigits(e.target.value)) || e.target.value == '') && e.target.value.length < 12) {
                this.setState({
                    [e.target.id]: e.target.value
                });
            }
        } else {
            this.setState({
                [e.target.id]: e.target.value
            });
        }
    }


    sendContact() {
        let err = this.state.err;
        this.state.name === '' ? err[0] = true : err[0] = false;
        this.state.company === '' ? err[1] = true : err[1] = false;
        this.state.phone === '' ? err[2] = true : err[2] = false;
        // this.state.email === '' ? err[3] = true : err[3] = false;
        this.state.desc === '' ? err[4] = true : err[4] = false;
        this.setState({
            err: err
        })
        if (err.every((e) => {
            return e === false
        })) {
            const response = axios.post(`/contactus/insert`, {
                name: this.state.name,
                mobileNumber: this.state.phone,
                email: this.state.email,
                text: this.state.desc,
                key1: this.state.company
            }).then(
                (response) => {

                    if (response.status === 200) {
                        this.props.enqueueSnackbar('???????? ?????? ???? ???????????? ?????????? ????', {
                            variant: 'success',
                            anchorOrigin: {
                                vertical: 'bottom',
                                horizontal: 'right',
                            },
                        });

                        this.setState({
                            name: '',
                            company: '',
                            phone: '',
                            email: '',
                            desc: '',
                            err: [false, false, false, false, false]
                        })
                    }

                },
                (error) => {
                    this.props.enqueueSnackbar('??????! ?????????????? ???? ???? ?????????? ???????? ????????', {
                        variant: 'error',
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'right',
                        },

                    });

                }
            )
        }
    }

    render() {
        let {err} = this.state;
        return (
            <Layout>
                <Head>
                    <title>???????? ???? ???? - ??????????</title>
                </Head>
                <Container maxWidth="lg" disableGutters={false}>
                    <Grid container>
                        <Grid container item md={12} sm={12} xs={12} style={{height: 'min-content'}}>
                            <Grid item container className={Style.contactContainer}>
                                <div className={Style.gradient}/>

                                <h2>???????? ???? ????</h2>

                                <p>?????? ?????????? ???????????? ???????? ?????????? ???????????????? ???????????? ???????? ???? ??????????????? ???????? ????????????????? ??
                                    ???????????????????
                                    ?????????? ???????? ?? ???? ?????? ?????? ???????? ?????? ???? ???? ???? ???????????? ???????? ???????????????? ?? ???? ????????????????
                                    ????????
                                    ???????? ???? ?????????? ???????????????? - ?????? ???????? ???????????? ?? ???? ?????? ?????? ???? ???? ????????</p>
                                <Grid container className={Style.contactFormContainer}>
                                    <Grid item md={6} sm={12} xs={12}>
                                        <span className={Style.required}>?????? ?? ?????? ????????????????</span>
                                        <input className={err[0] && Style.error} type="text" name="name" id="name"
                                               placeholder={`???????? : ???????? ??????????`}
                                               onChange={this.updateFields}
                                               value={numberFormat.toPersianDigits(this.state.name)}

                                        />
                                        <span className={Style.errorText}
                                              style={err[0] ? {display: 'flex'} : {display: 'none'}}>
                                           {/*<img src={error} alt=""/>*/}
                                            ?????? ?? ?????? ???????????????? ???????????? ??????
                                        </span>
                                    </Grid>
                                    <Grid item md={6} sm={12} xs={12}>
                                        <span className={Style.required}>?????? ????????????</span>
                                        <input className={err[1] && Style.error} type="text" name="company" id="company"
                                               placeholder={`???????? : ???????????? ??????????`}
                                               onChange={this.updateFields}
                                               value={numberFormat.toPersianDigits(this.state.company)}

                                        />
                                        <span className={Style.errorText}
                                              style={err[1] ? {display: 'flex'} : {display: 'none'}}>
                                           {/*<img src={error} alt=""/>*/}
                                            ?????? ???????????? ???????????? ??????
                                        </span>
                                    </Grid>
                                    <Grid item md={6} sm={12} xs={12}>
                                        <span className={Style.required}>???????? ??????????</span>
                                        <input style={{textAlign:'left',direction:'ltr'}} className={err[2] && Style.error} type="tel" name="phone" id="phone"
                                               placeholder={numberFormat.toPersianDigits(`0912-1234567`)}
                                               onChange={this.updateFields}
                                               value={numberFormat.toPersianDigits(this.state.phone)}
                                        />

                                        <span className={Style.errorText}
                                              style={err[2] ? {display: 'flex'} : {display: 'none'}}>
                                           {/*<img src={error} alt=""/>*/}
                                            ?????????? ???????? ???????????? ??????
                                        </span>
                                    </Grid>
                                    <Grid item md={6} sm={12} xs={12}>
                                        <span>??????????</span>
                                        <input className={err[3] && Style.error} type="text" name="email" id="email"
                                               style={{textAlign:'left'}}
                                               placeholder={`example@chista.ir`}
                                               onChange={this.updateFields}
                                               value={this.state.email}

                                        />
                                        <span className={Style.errorText}
                                              style={err[3] ? {display: 'flex'} : {display: 'none'}}>
                                           {/*<img src={error} alt=""/>*/}
                                            ?????????? ???????????? ??????
                                        </span>
                                    </Grid>
                                    <Grid item md={12} sm={12} xs={12}>
                                        <span className={Style.required}>??????</span>
                                        <textarea minLength={2} maxLength={250} className={err[4] && Style.error}
                                                  name="desc" id="desc" cols="30"
                                                  rows="10"
                                                  placeholder={`???????? ?? ???????? ?????? ???? ??????????????`}
                                                  onChange={this.updateFields}
                                                  value={numberFormat.toPersianDigits(this.state.desc)}
                                        >

                                        </textarea>
                                        <span className={Style.errorText}
                                              style={err[4] ? {display: 'flex'} : {display: 'none'}}>
                                           {/*<img src={error} alt=""/>*/}
                                            ?????? ???????????? ??????
                                        </span>
                                    </Grid>

                                    <Grid item md={12} sm={12} xs={12}>

                                        <Button className={Style.submit} variant="contained"
                                                endIcon={<img src={ArrowLeft} alt=""/>}

                                                onClick={this.sendContact.bind(this)}>??????????
                                        </Button>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Layout>

        )
    }
}

export default withSnackbar(Contact);
