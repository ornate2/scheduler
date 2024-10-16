service SchedulerService @(requires: 'authenticated-user'){
    function jobScheduler() returns String;
};