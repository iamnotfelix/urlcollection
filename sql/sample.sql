use urlcollection;

insert into users (username, password) values
    ("andrei", "123"),
    ("marius", "123"),
    ("giulia", "123");

insert into categories (name) values 
    ("Entertainment"), 
    ("Work"), 
    ("Study"); 

insert into urls (url, description, category, user) values 
    ("https://www.youtube.com", "Desctiption 1", 1, 1),
    ("https://www.instagram.com", "Desctiption 2", 1, 1),
    ("https://www.cs.ubbcluj.ro", "Desctiption 3", 2, 1),
    ("https://www.cs.ubbcluj.ro/~forest/impulse", "Desctiption 4", 2, 1),
    ("https://getbootstrap.com", "Desctiption 5", 3, 1),
    ("https://code.visualstudio.com/docs", "Desctiption 6", 3, 1),
    ("https://www.w3schools.com/js/js_json_php.asp", "Desctiption 7", 1, 1),
    ("https://chat.openai.com/", "Desctiption 8", 1, 1),
    ("https://www.cs.ubbcluj.ro/~asfasdf", "Desctiption 9", 2, 1),
    ("https://www.cs.ubbcluj.ro/~forest/impulse", "Desctiption 10", 2, 2),
    ("https://facebook.com", "Desctiption 11", 3, 2),
    ("https://whatever.com", "Desctiption 12", 3, 2),
    ("https://www.twitter.com", "Desctiption 13", 1, 2),
    ("https://www.microsoft.com", "Desctiption 14", 1, 2),
    ("https://www.yahoo.ro", "Desctiption 15", 2, 2),
    ("https://www.gmail.com", "Desctiption 16", 2, 2),
    ("https://numaistiualtelinkuri.com", "Desctiption 17", 3, 2),
    ("https://linkinventat.com/docs", "Desctiption 18", 3, 2);