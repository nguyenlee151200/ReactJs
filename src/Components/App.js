import React, { Component } from 'react';
import './../Components/App.js';
import AddUser from './AddUser.js';
import Header from './Header.js';
import SearchForm from './SearchForm.js';
import Table from './Table.js';
import DataUser from './data.json';
import { v4 as uuidv4 } from 'uuid';
// import {createSubscription} from 'create-subscription';
class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      hienTHiForm:false,
      data : [],
      searchText: '',
      editUserStatus: false,
      userEditObject : {}
    }
  }
  
  componentWillMount() {
    //ktra xem có local storage chưa
    //console.log(localStorage.setItem('userData'));
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData',JSON.stringify( DataUser));
    }
    else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      });
    }
  }
  
  changeEditUserStatus =  () => {
    this.setState({
      editUserStatus : !this.state.editUserStatus


    });
  }
  deleteUser =  (idUser) => {
    //ham filter
    
    // console.log(idUser);
    // var tempData = this.state.data;
    var tempData =  this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data : tempData
    });
    // console.log(tempData);
    // this.state.data.forEach( (value,key) => {
      
    //   if(value.id === idUser){
    //     console.log(key);
       

    //   }
    // })
    //đẩy vào dữ liệu
    localStorage.setItem('userData',JSON.stringify(tempData));
  }
  getUserEditInfoApp =  (info) => {
    // console.log('thông tin đã sửa xong là ' + info.name);
    this.state.data.forEach((value,key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data));
  }
   editUser =(user) => {
    //  console.log('đã kết nối');
     this.setState({
       userEditObject : user
     });
    //  console.log(user);
   }
  getNewUserData =  (name,tel,permission) => {
   
    var item = {};
    item.id = uuidv4();;
    item.name  = name;
    item.tel = tel;
    item.permission = permission;
    var items =this.state.data;
    items.push(item);
    this.setState({
      data : items
    });
    // console.log('kết nối oke');
    // console.log(this.state.data);
    localStorage.setItem('userData',JSON.stringify(items));
    // console.log(name);
    // console.log(tel);
    // console.log(permission);
    
  }
  getTextSearch = (dl) => {
    this.setState({
      searchText:dl
    });
    // console.log(this.state.searchText);
  }
  doiTrangThai = () => {
    this.setState({
      hienTHiForm :! this.state.hienTHiForm
    });
  }
  render(){
    // localStorage.setItem('userData',JSON.stringify(DataUser));
    // console.log(this.state.data);
    var ketQua = [];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketQua.push(item);
      }
    })
    // console.log(ketQua);
    return (
      
      <div >
        <Header></Header>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <SearchForm getUserEditInfoApp ={ (info) => this.getUserEditInfoApp(info)} userEditObject={this.state.userEditObject} changeEditUserStatus = { () => this.changeEditUserStatus()} editUserStatus={this.state.editUserStatus} checkConnectProps = {(dl) => this.getTextSearch(dl)} ketNoi = {() => this.doiTrangThai()} hienTHiForm = {  this.state.hienTHiForm}/>
              <Table deleteUser = {  (idUser) => this.deleteUser(idUser) }  changeEditUserStatus = { () => this.changeEditUserStatus()}  editFun = { (user) => this.editUser(user)} dataUserProps = {ketQua}/>
              <AddUser add =  { (name,tel,permission) => this.getNewUserData(name,tel,permission)} hienTHiForm = {  this.state.hienTHiForm}/>
            </div>
          </div>
        </div>
  
      </div>
    );
  }
 
}

export default App;
