import React from 'react';
import classnames from 'classnames';

const Editable = ({ editing, value, onEdit, className, ...props }) => {
  if (editing) return (
    <Editable.Edit
      value={value}
      onEdit={onEdit}
      className={className}
    />
  )
  return <Editable.Value className={className} value={value} />
}

Editable.Value = ({ value, className, ...props }) => (
  <span className={classnames(className, 'value')} {...props}>{value}</span>
)

Editable.Edit = class Edit extends React.Component {
  checkEnter = (e) => {
    if (e.key === 'Enter') this.finishEdit(e)
  };
  
  finishEdit = (e) => {
    const value = e.target.value;
    if (this.props.onEdit) {
      this.props.onEdit(value);
    }
  };
  
  render() {
    return <input
      className={classnames(this.props.className, 'edit')}
      type="text"
      autoFocus={true}
      defaultValue={this.props.value}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter}
    />
  }
}

export default Editable;
