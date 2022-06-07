function appendWorker(worker){
    $("#workers-list-end").before(`
        <div class="container-fluid card mb-1 worker">
            <a href="../profile/index.html" style="text-decoration: none;">
                <div class="row justify-content-right">
                    <div class="col-lg-2">
                        <img class="profile-picture d-flex" src="` + worker.avatar + `" alt="profile image">
                    </div>
                    <div class="col-lg-9">
                        <span class="fs-3 row">` + worker.name + `</span>
                        <span class="row">` + worker.position + `</span>
                    </div>
                </div>
            </a>
        </div>
    `)
}

function getWorkers(){
    return [
        {name: 'Bob Marley', position: 'CEO', avatar: 'avatar.png'},
        {name: 'Kent Smith', position: 'SEO', avatar: 'avatar.png'},
        {name: 'Rose Mitchell', position: 'hr-manager', avatar: 'avatar.png'},
        {name: 'Miguel Rodriguez', position: 'developer', avatar: 'avatar.png'},
        {name: 'Sam Grant', position: 'developer', avatar: 'avatar.png'},
        {name: 'Richard Grant', position: 'developer', avatar: 'avatar.png'},
        {name: 'Cory Grant', position: 'developer', avatar: 'avatar.png'},
        {name: 'Sam Grant', position: 'developer', avatar: 'avatar.png'},
        {name: 'Mads Grant', position: 'developer', avatar: 'avatar.png'},
    ]
}

function getMoreWorkers(){
    return [
        {name: 'Kirsten Dunst', position: 'CEO', avatar: 'avatar.png'},
        {name: 'Richard Kruspe', position: 'SEO', avatar: 'avatar.png'},
        {name: 'Robert Pratt', position: 'CEO', avatar: 'avatar.png'},
        {name: 'David Bowie', position: 'SEO', avatar: 'avatar.png'},
        
    ]
}