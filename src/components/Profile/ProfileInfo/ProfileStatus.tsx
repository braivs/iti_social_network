import React from 'react';

type ProfileStatusPropsType = {
  status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  state = {
    editMode: false
  }

  activateEditMode = () => {
    debugger
    this.state.editMode = true;
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input value={this.props.status}/>
          </div>
        }
      </div>
    )
  }
}