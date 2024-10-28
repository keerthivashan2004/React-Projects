import react from "react";

class TwoWayBindingExample extends Component {
    constructor(props);{
        super(props);
        this.state={
            inputValue: ''
        };
    }

    handleInputChange=(event)=>{
        this.setState({
            inputValue: event.target.value
        });
    };
}