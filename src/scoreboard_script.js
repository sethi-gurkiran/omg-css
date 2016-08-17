///////////////////STATELESS APP SEEN HERE////////////////////////
var headers = ["Team", "Round 1", "Round 2", "Round 3", "Final"];  
var data = [
    ["OMG-CSS", "5", "5", "5", "20"],
    ["Osama-who", "5", "5", "5", "20"],
]; 

var Excel = React.createClass({
    render : function() {
        return (
            React.DOM.table(null,
                React.DOM.thead(null,
                    React.DOM.tr(null,
                        this.props.header.map(function(title){
                            return React.DOM.th(null, title);
                        })
                    )
                )
            )
        );
    }
});

React.DOM.render(
    React.createElement(Excel,{
        headers : headers,
        initialData : data,
    }),
    document.getElementById("react-app")
);

         /*   
            var TextAreaComponent = React.createClass({
                propTypes : {
                    text: React.PropTypes.string,
                },

                getDefaultProps : function() {
                    return {
                        text : '',
                    };
                },

                _textChangeEvent : function(ev) {
                    this.setState({
                        text : ev.target.value,
                    });
                },

                getInitialState : function() {
                    return {
                        text : this.props.text,
                    };
                },

                render : function () {
                    return React.DOM.div(null, 
                        React.DOM.textarea({
                            defaultValue : this.props.text,
                            value : this.state.text,
                            onChange: this._textChangeEvent,
                        }),
                        React.DOM.h3(null, this.state.text.length)
                    );
                }
            })

            ReactDOM.render(
                React.createElement(TextAreaComponent, {
                    text : "Default text",
                }),
                document.getElementById("react-app")
            );
            */