import React, { Component } from 'react';
import EditUser from './EditUser';

class SearchForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            tempValue: '',
            userObj: {}
        }
    }
    //props.changeEditUserStatus =
    //userEditObject
    //props.getUserEditInfoApp
    getUserEditInfo =  (info) => {
        this.setState({
            userObj : info
        });
        // console.log(info);
        this.props.getUserEditInfoApp(info);
    }
    isShowEditForm =  () => {
        if(this.props.editUserStatus === true){
            return <EditUser 
            getUserEditInfo =  {(info) => this.getUserEditInfo(info)}
             userEditObject={this.props.userEditObject} changeEditUserStatus = { () => this.props.changeEditUserStatus()}/>
        }
    }
    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            tempValue: event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue);
    }
    hienThiNut = () => {
        if (this.props.hienTHiForm === true) {
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}>Đóng lại</div>

        }
        else {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()}>Thêm mới</div>
        }
    }
    render() {
        return (
            <div className="col-12">
                <div className="row">
                    {this.isShowEditForm()}
                </div>
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" placeholder="Nhập từ khóa tìm kiếm" onChange={(event) => this.isChange(event)} />
                        <div className="btn btn-info " onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}>Tìm </div>

                    </div>
                </div>
                <div className="form-group">
                    {this.hienThiNut()}
                </div>

                <hr />
            </div>
        );
    }
}

export default SearchForm;