const TimersDashboard = React.createClass({
  render: function () {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList />
          <ToggleableTimerForm
          isOpen={true}
          />
        </div>
      </div>
    );
  },
});
