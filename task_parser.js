/* ==========
    Utils 
========== */

function replaceNewLines(str, replacement=' ') {
  return str.replace(/(?:\r\n|\r|\n)+/g, replacement)
}


/* ===================
    Watcher parser   
=================== */

function parseTaskRow(taskRow) {
  var $project = $($('.day-block__title', taskRow)[0]);
  var $duration = $($('.day-block__head > .pull-right', taskRow)[0]);
  var $description = $($('.day-block__description', taskRow)[0]);
  
  return {
    'project': $.trim(replaceNewLines($project.text())),
    'duration': parseFloat($.trim($duration.text())),
    'description': $.trim(replaceNewLines($description.text()))
  }
}


function parseTaskRows(taskRows) {
  var tasks = [];
  
  taskRows.each(function (index) {
    tasks.push(parseTaskRow(this));
  });
  
  return tasks;
}


function formatTask(task, fields=null, separator='\t') {
  var taskString = '';
  if (!fields) {
    fields = ['description', 'duration'];
  }
  for (var fieldIndex in fields) {
    var field = fields[fieldIndex];
    var fieldValue = task[field];
    taskString += ((field == 'duration') ? fieldValue.toLocaleString() : fieldValue) + separator;
  }
  
  return $.trim(taskString)
}


function formatTasks(tasks, fields=null, inner_separator='\t', outer_separator='\n') {
  var tasksString = '';
  for (var taskIndex in tasks) {
    var task = tasks[taskIndex];
    tasksString += formatTask(task, fields, inner_separator) + outer_separator;
  }
  
  return $.trim(tasksString);
}


function filterTasks(tasks, projects=null) {
  if (projects === null) {
    return tasks;
  }
  
  var filtered = [];
  
  for (var taskIndex in tasks) {
    var task = tasks[taskIndex];
    if ($.inArray(task['project'], projects) != -1) {
      filtered.push(task);
    }
  }
  
  return filtered;
}


function getTaskRows(day) {
  // day in [1..5]
  var dayRowsContainer = $('.col-lg-1-5.col-lg_week-day')[day - 1];
  return $('.task-block', dayRowsContainer);
}


function getTasks(day) {
  return parseTaskRows(getTaskRows(day));
}


/* ==============
    Instances
============== */

function pharmaParse(day, print=true) {
  var tasks = filterTasks(getTasks(day), ['Pharma']);
  if (print) {
    console.log(formatTasks(tasks));
  }
  else {
    return tasks
  }
}


pharmaParse(2);
/* ==========
    Utils 
========== */

function replaceNewLines(str, replacement=' ') {
  return str.replace(/(?:\r\n|\r|\n)+/g, replacement)
}


/* ===================
    Watcher parser   
=================== */

function parseTaskRow(taskRow) {
  var $project = $($('.day-block__title', taskRow)[0]);
  var $duration = $($('.day-block__head > .pull-right', taskRow)[0]);
  var $description = $($('.day-block__description', taskRow)[0]);
  
  return {
    'project': $.trim(replaceNewLines($project.text())),
    'duration': parseFloat($.trim($duration.text())),
    'description': $.trim(replaceNewLines($description.text()))
  }
}


function parseTaskRows(taskRows) {
  var tasks = [];
  
  taskRows.each(function (index) {
    tasks.push(parseTaskRow(this));
  });
  
  return tasks;
}


function formatTask(task, fields=null, separator='\t') {
  var taskString = '';
  if (!fields) {
    fields = ['description', 'duration'];
  }
  for (var fieldIndex in fields) {
    var field = fields[fieldIndex];
    var fieldValue = task[field];
    taskString += ((field == 'duration') ? fieldValue.toLocaleString() : fieldValue) + separator;
  }
  
  return $.trim(taskString)
}


function formatTasks(tasks, fields=null, inner_separator='\t', outer_separator='\n') {
  var tasksString = '';
  for (var taskIndex in tasks) {
    var task = tasks[taskIndex];
    tasksString += formatTask(task, fields, inner_separator) + outer_separator;
  }
  
  return $.trim(tasksString);
}


function filterTasks(tasks, projects=null) {
  if (projects === null) {
    return tasks;
  }
  
  var filtered = [];
  
  for (var taskIndex in tasks) {
    var task = tasks[taskIndex];
    if ($.inArray(task['project'], projects) != -1) {
      filtered.push(task);
    }
  }
  
  return filtered;
}


function getTaskRows(day) {
  // day in [1..5]
  var dayRowsContainer = $('.col-lg-1-5.col-lg_week-day')[day - 1];
  return $('.task-block', dayRowsContainer);
}


function getTasks(day) {
  return parseTaskRows(getTaskRows(day));
}


/* ==============
    Instances
============== */

function pharmaParse(day, print=true) {
  var tasks = filterTasks(getTasks(day), ['Pharma']);
  if (print) {
    console.log(formatTasks(tasks));
  }
  else {
    return tasks
  }
}
