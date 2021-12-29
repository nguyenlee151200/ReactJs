import React, { Component } from 'react';

class EditUser extends Component {
    //props.userEditObject
    constructor(props, context) {
        super(props, context);
        this.setState({
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            permission: this.props.userEditObject.permission
            // userObj:{}
        });
    }
    //getUserEditInfo
    isChange =  (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
    }
    saveButton =  () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;
        // console.log('info la ' + info.name);
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();//an form
    }
    render() {
        // console.log(this.state);
        return (
            <div className="col">
                        <div className="card text-white bg-warning mb-3 mt-2" >
                            <div className="card-header text-center">Sửa thông tin User</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <label >Tên User</label>
                                    <input onChange={ (event) => this.isChange(event)} defaultValue={this.props.userEditObject.name} type="text" name="name" className="form-control" placeholder="Username" />
                                </div>
                                <div className="form-group">
                                    <label >Điện thoại</label>
                                    <input onChange={ (event) => this.isChange(event)} defaultValue={this.props.userEditObject.tel} type="text" name="tel" className="form-control" placeholder="SĐT" />
                                </div>
                                <div className="form-group">
                                    <label >Quyền</label>
                                    <select onChange={ (event) => this.isChange(event)} defaultValue={this.props.userEditObject.permission} name="permission" className="custom-select" id="inputGroupSelect01">
                                        <option >Quyền</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <div type = "button" className="btn btn-block btn-danger"  onClick={ () => this.saveButton() }>Lưu</div>
                                </div>
                            </div>
                        </div>
                    </div>
        );
    }
}

export default EditUser;