"use strict";(self["webpackChunkedu_mobile"]=self["webpackChunkedu_mobile"]||[]).push([[750],{1623:function(t,e,i){i.r(e),i.d(e,{default:function(){return d}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"course-video"},[e("van-nav-bar",{attrs:{title:"视频","left-text":"返回","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("div",{attrs:{id:"video-container"}})],1)},s=[],r=i(124),a=i(8534),o=(i(8984),i(797)),l=(i(9653),i(66)),h={name:"CourseVideo",components:{VanNavBar:o.Z},props:{lessonId:{type:[String,Number],require:!0}},created:function(){this.loadVideo()},methods:{loadVideo:function(){var t=this;return(0,a.Z)((0,r.Z)().mark((function e(){var i,n,s;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,l.$p)({lessonId:t.lessonId});case 2:i=e.sent,n=i.data,s=new window.Aliplayer({id:"video-container",vid:n.content.fileId,playauth:n.content.playAuth,qualitySort:"asc",format:"mp4",mediaType:"video",width:"100%",height:"100%",autoplay:!0,isLive:!1,rePlay:!1,playsinline:!0,preload:!0,controlBarVisibility:"hover",useH5Prism:!0},(function(t){console.log("The player is created")})),console.log(s);case 6:case"end":return e.stop()}}),e)})))()}}},c=h,f=i(1001),u=(0,f.Z)(c,n,s,!1,null,"9b05ea9c",null),d=u.exports},797:function(t,e,i){i(9653);var n=i(6786),s=i(1047),r=i(9858),a=(0,n.d)("nav-bar"),o=a[0],l=a[1];e["Z"]=o({props:{title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,border:{type:Boolean,default:!0}},data:function(){return{height:null}},mounted:function(){var t=this;if(this.placeholder&&this.fixed){var e=function(){t.height=t.$refs.navBar.getBoundingClientRect().height};e(),setTimeout(e,100)}},methods:{genLeft:function(){var t=this.$createElement,e=this.slots("left");return e||[this.leftArrow&&t(r.Z,{class:l("arrow"),attrs:{name:"arrow-left"}}),this.leftText&&t("span",{class:l("text")},[this.leftText])]},genRight:function(){var t=this.$createElement,e=this.slots("right");return e||(this.rightText?t("span",{class:l("text")},[this.rightText]):void 0)},genNavBar:function(){var t,e=this.$createElement;return e("div",{ref:"navBar",style:{zIndex:this.zIndex},class:[l({fixed:this.fixed,"safe-area-inset-top":this.safeAreaInsetTop}),(t={},t[s.xe]=this.border,t)]},[e("div",{class:l("content")},[this.hasLeft()&&e("div",{class:l("left"),on:{click:this.onClickLeft}},[this.genLeft()]),e("div",{class:[l("title"),"van-ellipsis"]},[this.slots("title")||this.title]),this.hasRight()&&e("div",{class:l("right"),on:{click:this.onClickRight}},[this.genRight()])])])},hasLeft:function(){return this.leftArrow||this.leftText||this.slots("left")},hasRight:function(){return this.rightText||this.slots("right")},onClickLeft:function(t){this.$emit("click-left",t)},onClickRight:function(t){this.$emit("click-right",t)}},render:function(){var t=arguments[0];return this.placeholder&&this.fixed?t("div",{class:l("placeholder"),style:{height:this.height+"px"}},[this.genNavBar()]):this.genNavBar()}})},8984:function(t,e,i){i(1958),i(3332),i(6742)}}]);