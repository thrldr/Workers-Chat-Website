$(document).ready(function(){
    const workers = getWorkers();
    workers.forEach(worker => appendWorker(worker));

    // ajax on scroll end
    $('#workers-list').scroll(function(){
        var element = document.getElementById("workers-list")
        if (element.scrollHeight - element.scrollTop === element.clientHeight)
        {
            var moreWorkers = getMoreWorkers();
            moreWorkers.forEach(worker => appendWorker(worker));
        }
    })
    
});
