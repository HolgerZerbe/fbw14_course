import './index.html';
import './style.css';


const mainObj = document.getElementById('main');
const navCreatePostObj = document.getElementById('navCreatePost');
const navPipeObj = document.getElementById('navPipe');
const navLogoutObj = document.getElementById('navLogout');
const navLoginObj = document.getElementById('navLogin');
const navSignUpObj = document.getElementById('navSignUp');
const navLoadArticleObj = document.getElementById('navLoadArticle');


const loadBlogPosts = async () => {
    
    const result = await fetch('http://localhost:3000/blogposts');
    const blogpostsArray = await result.json();
    
    let blogposts = `<div class="blogposts">`;
    
    for (let i = 0; i < blogpostsArray.length; i++) {
        blogposts += `<div class="blogpost">
        <h2 class="blog-header">${blogpostsArray[i].title}</h2>
        <div class="blog-body">${blogpostsArray[i].content}
        </div>
        </div>`;
    }
    blogposts += `</div>`;
    mainObj.innerHTML = blogposts;
}

const loadCreateBlogPost = () => {
    const createblogpost = `<div class="new-blogpost">
    <input type="text" placeholder="Blog-Titel eingeben" id="title" />
    <textarea rows="10" id="content"></textarea>
    <button id="createPost">Artikel erstellen</button>
    </div>`;
    
    mainObj.innerHTML = createblogpost;
    const createPostObj = document.getElementById('createPost');
    createPostObj.onclick=createPost;
}

const createPost = async () => {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    if (!(title.length > 0 && content.length > 0)) {
        alert('Bitte Titel und Content eingeben!');
        return;
    }
    
    try {
        const response = await fetch('http://localhost:3000/blogpost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials:'include',
            body: JSON.stringify({
                title: title,
                content: content
            })
        });
        // falls http-antwort 200 oder 304 war 
        if (response.ok) {
            // 2. das objekt als json interpretieren -> wir bekommen ein objekt
            const responseJson = await response.json();
            // 3. als string darstellen
            const responseStr = JSON.stringify(responseJson);
            loadBlogPosts();
        }
    } catch (e) {
        console.log('Error: ' + e);
    }
}

const loadLogin = () => {
    const loginhtml = `
    <div class="blogposts login">
    <input type="text" placeholder="email" id="email" />
    <input type="password" placeholder="password" id="password" />
    <button id="btnLogin">Login</button>
    </div>`;
    
    mainObj.innerHTML = loginhtml;
    const btnLoginObj = document.getElementById('btnLogin');
    btnLoginObj.onclick=login;
}

const loadSignUp = () => {
    const signUphtml = `
    <div class="blogposts login">
    <input type="text" placeholder="email" id="email" />
    <input type="password" placeholder="password" id="password" />
    <input type="password" placeholder="password wiederholen" id="password2" />
    <button id="btnSignUp">Jetzt registrieren</button>
    </div>`;
    
    mainObj.innerHTML = signUphtml;
    const btnSignUpObj = document.getElementById('btnSignUp');
    btnSignUpObj.onclick=signup
    ;
}


const login = async () => {
    const emailObj = document.getElementById('email');
    const passwordObj = document.getElementById('password');
    
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials:'include',
            body: JSON.stringify({
                email: emailObj.value,
                password: passwordObj.value
            })
        });
        // falls http-antwort 200 oder 304 war 
        if (response.ok) {
            // 2. das objekt als json interpretieren -> wir bekommen ein objekt
            const responseObj = await response.json();
            if (responseObj.error != 0) {
                alert('Login failed!');
                
                emailObj.value = '';
                passwordObj.value = '';
                return;
            }
            
            showLoggedIn(); // baue frontend um für eingeloggten user
        }
    } catch (e) {
        console.log('Error: ' + e);
    }
}

const signup = async () => {
    const emailObj = document.getElementById(`email`);
    const passwordObj = document.getElementById('password');
    const passwordObj2 = document.getElementById('password2');
    
    if (passwordObj.value !== passwordObj2.value) {
        alert(`Passwörter müssen identisch sein`);
        return;
    }
    
    // ansonsten sende fetch Post zu /signup mit body.email und body.password
    
    
    try {
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials:'include',
            body: JSON.stringify({
                email: emailObj.value,
                password: passwordObj.value
            })
        });
        // falls http-antwort 200 oder 304 war 
        if (response.ok) {
            // 2. das objekt als json interpretieren -> wir bekommen ein objekt
            const responseObj = await response.json();
            let thxSignUp = "";
            if (responseObj.error === 0) {
                
                thxSignUp = `
                <div class="blogposts signup">Danke für Ihre Registrierung! Es wurde eine Email an ${emailObj.value} geschickt.
                
                </div>
                <a id="backToStart" href="http://localhost:3000">Hier gehts zurück zur Startseite!</a>
                
                `;
            } else {
                thxSignUp = `
                <div class="blogposts signup">Registrierung fehlgeschlagen.</div>`
            }
            mainObj.innerHTML = thxSignUp;
            
            
            
            
        }
    } catch (e) {
        console.log('Error: ' + e);
    }
    
    
}





const showLoggedIn = () => {
    localStorage.setItem('loggedIn', '1');
    navCreatePostObj.style.display = 'inline-block';
    navPipeObj.style.display = 'inline-block';
    navLoginObj.style.display = 'none';
    navLogoutObj.style.display = 'inline-block';
    navSignUpObj.style.display = 'none';
    loadBlogPosts();
}

const showLoggedOut = () => {
    localStorage.setItem('loggedIn', '0');
    navCreatePostObj.style.display = 'none';
    navPipeObj.style.display = 'none';
    navLoginObj.style.display = 'inline-block';
    navLogoutObj.style.display = 'none';
    navSignUpObj.style.display = 'inline-block';
    loadBlogPosts();
}

const logout = async () => {
    try {
        const response = await fetch('http://localhost:3000/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials:'include'
            
        });
        if (response.ok) {
            const responseObj = await response.json();
            if (responseObj.error != 0) {
                alert('Logout failed!');
                return;
            }
            
            showLoggedOut();
        }
    } catch (e) {
        console.log('Error: ' + e);
    }
}

// beim laden schaue ich, ob user eingeloggt ist
const loggedIn = localStorage.getItem('loggedIn');
// beim ersten seitenaufruf, kann ich nicht eingeloggt sein,
// dann wird der eintrag im localstorage gesetzt
if (loggedIn === null) {
    localStorage.setItem('loggedIn', '0');
    showLoggedOut();
} else {
    if (loggedIn == '1') {
        showLoggedIn();
    } else { // '0', 'null'
    showLoggedOut();
}
}

navLoginObj.onclick= loadLogin;
navSignUpObj.onclick= loadSignUp;
navLogoutObj.onclick= logout;
navLoadArticleObj.onclick= loadBlogPosts;
navCreatePostObj.onclick = loadCreateBlogPost;


let timerId = null;

const restartTimer = () => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
        console.log('inaktiv - session wird ausgeloggt')
        showLoggedOut()
    },
    1000 * 60 * 5); // 5 minuten
    // 1000*31);    
}

addEventListener('click', () => {
    console.log('click passiert! - timer wird neugestartet');
    restartTimer();
});

addEventListener('keydown', () => {
    console.log('keydown passiert! - timer wird neugestartet');
    restartTimer();
});