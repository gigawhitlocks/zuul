var MarkdownBox = React.createClass({
    getInitialState: function() {
	return {value: ""};
    },
    handleChange: function(event) {
	this.setState({value: event.target.value});
	if( event.target.value === "" ) {
	    $("#markdownPreview").hide();
	} else {
	    $("#markdownPreview").show();
	}
	$('#markdownPreview').scrollTop($('#markdownPreview').prop('scrollHeight'));

    },
    render: function() {
	var value = this.state.value;
	var textareaStyle = {
	    whiteSpace:'wrap',
	    overflow:'auto'};
	var previewStyle = {
	    maxHeight: '40em',
	    overflow: 'scroll'
	};
	return (
	    <div>
	    <div 
	    dangerouslySetInnerHTML={{__html: markdown.toHTML(value)}}
	    className="panel-body" id="markdownPreview"
	    style={previewStyle}>
	    </div>
	    <textarea type="text"
	    style={textareaStyle}
	    value={value} 
	    onChange={this.handleChange}
	    className="form-control"/>
	    </div>
	);
    }
});

React.render(
    <MarkdownBox />,
    document.getElementById('input')
);
$("#markdownPreview").hide();
