





//头部
var Header = React.createClass({
	render:function(){
		return <div className="head-bar"></div>
	}
})

//标题组件
var SiderBar = React.createClass({
	getInitialState:function(){
		return {}
	},
	getData:function(){

	},
	render:function(){
		
		return (
			<div className = "silderBox">{this.props.data.title}</div>
			)
	}

})
//标题组合
var SiderComt = React.createClass({
	render:function(){
		return (
			<div className="silder-comt">
				<SiderBar data = {this.props.data} />
			</div>
			)
	}
})


//测试按钮
var TestButton = React.createClass({
	getInitialState:function(){
		return {liked:"111"}
		
	},
	handleClick:function(e){
		this.setState({liked: e.target.value});
	},
	render:function(){
		return (
			<div>
				<input type="text" id="p1" onChange = {this.handleClick}/>
				<button onClick = {this.handleClick}>测试</button>
				<div id="testCt">{this.state.liked}</div>
			</div>
			)
	}
})

//组合
var CommentBox = React.createClass({
	getInitialState:function(){
		this.pla ={title:"推荐版块管理"} 
		
		return {};
	},

	render:function(){
		return (
			<div>
				<Header />
				<SiderComt data = {this.pla}/>
				<TestButton />
			</div>
			)
	}

})


React.render(
	<CommentBox />,
	document.getElementById("cont")
	)

