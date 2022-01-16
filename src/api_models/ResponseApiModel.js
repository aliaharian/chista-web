export default class ResponseModel {

    constructor({ status= 200, message= "", data= {} }) {
        this._status = status
        this._message = message
        this._data = data
    }

    /* status */
    get status() {
        return this._status
    }

    set status(value) {
        this._status = value
    }

    /* message */
    get message() {
        return this._message
    }

    set message(value) {
        this._message = value
    }

    /* data */
    get data() {
        return this._data
    }

    set data(obj) {
        this._data = obj
    }
}