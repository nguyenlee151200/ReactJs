import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: '',
      name: '',
      tel: '',
      permission:'',
    }
  }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name);
    // console.log(value);
    this.setState({
      [name]: value
    });
    //packed to item
    // var item = {};
    // item.id = this.state.id;
    // item.name  = this.state.name;
    // item.tel = this.state.tel;
    // item.permission = this.state.permission;
    // console.log(item);
  }

  kiemTraTrangThai = () => {
    if (this.props.hienTHiForm === true) {
      return (
        <div className="col">
          <div className="card border-primary mb-3 mt-2" style={{ maxWidth: '18rem' }}>
            <div className="card-header">Thêm mới</div>
            <div className="card-body text-primary">
              <div className="form-group">
                <label >Tên User</label>
                <input type="text" onChange={(event) => this.isChange(event)} name="name" className="form-control" placeholder="Username" />
              </div>
              <div className="form-group">
                <label >Điện thoại</label>
                <input type="text" onChange={(event) => this.isChange(event)} name="tel" className="form-control" placeholder="SĐT" />
              </div>
              <div className="form-group">
                <label >Quyền</label>
                <select onChange={(event) => this.isChange(event)} name="permission" className="custom-select" id="inputGroupSelect01">
                  <option >Quyền</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Modrator</option>
                  <option value={3}>Normal</option>
                </select>
              </div>
              <div className="form-group">
                <div className="btn btn-block btn-primary" onClick={(name,tel,permission) => this.props.add(this.state.name, this.state.tel,this.state.permission)}>Thêm mới</div>
              </div>
            </div>
          </div>
        </div>

      )
    }
  }
  render() {
    // console.log(this.item);
    return (
      <div>
        {this.kiemTraTrangThai()}
      </div>


    );
  }
}

export default AddUser;