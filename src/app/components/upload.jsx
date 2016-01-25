/** In this file, we create a React component which incorporates components provided by material-ui */

import fetch from 'isomorphic-fetch'
import React from 'react';
import {Header, Grid, Col, Image} from 'amazeui-react';
import {Form, FormGroup, Input} from 'amazeui-react';

const Upload = React.createClass({

  onSubmit(e) {
    e.preventDefault();

    const API = "upload.php";
    const bodyData = JSON.stringify({
      'title': this.state.title,
      'href': this.state.href,
      'brief': this.state.brief,
      'passwd': this.state.passwd,
    });
    return fetch(API, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: bodyData,
      })
      .then(req => req.json())
      .then(function(json) {
        if (json.rc === 1) {
          alert('发布成功');
          window.location = "./";
        } else {
          alert('发布失败 ' + json.msg);
        }
        return json.rc;
      });
  },

  getInitialState: function() {
    return {title: '', href: '', brief: '', passwd: ''};
  },

  handleTitleChange: function(e) {
    this.setState({title: e.target.value});
  },

  handleHrefChange: function(e) {
    this.setState({href: e.target.value});
  },

  handleBriefChange: function(e) {
    this.setState({brief: e.target.value});
  },

  handlePasswdChange: function(e) {
    this.setState({passwd: e.target.value});
  },


  render() {

    //link: this.props.baseUrl || "http://blog.xiaoheqingting.com/tools/fav",
    const navData = {
      title: 'For A Better World',
      data : {
        left: [
          {
          link: "./",
          icon: 'home',
          },
        ],
      },
    };

    return (
      <div>
        <Header {...navData} />
        <Form horizontal onSubmit={this.onSubmit}>
          <Input label="标题" labelClassName="am-u-sm-2" wrapperClassName="am-u-sm-10" value={this.state.title} onChange={this.handleTitleChange} />
          <Input label="网址" labelClassName="am-u-sm-2" wrapperClassName="am-u-sm-10" value={this.state.href} onChange={this.handleHrefChange}/>
          <Input type="textarea" label="说明" labelClassName="am-u-sm-2" wrapperClassName="am-u-sm-10" value={this.state.brief} onChange={this.handleBriefChange}/>
          <Input label="密码" labelClassName="am-u-sm-2" wrapperClassName="am-u-sm-10" type="password" value={this.state.passwd} onChange={this.handlePasswdChange}  />
          <Input type="submit" amStyle="success" value="提交"  wrapperClassName="am-u-sm-offset-2 am-u-sm-10" />
        </Form>
      </div>
      );
    },
});

export default Upload;
