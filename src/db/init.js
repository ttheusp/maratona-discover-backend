const Database = require('config')

Database()

// Cria tabela profile
Database.exec(`CREATE TABLE profile (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    avatar TEXT,
    monthly_budget INT,
    days_per_week INT,
    hours_per_day INT,
    vacation_per_year INT,
    value_hour INT
)`)

// Cria tabela jobs
Database.exec(`CREATE TABLE jobs(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    daily_hours INT,
    total_hours INT,
    createdAt DATATIME
)`)

// Insere dados na tabela profile
Database.run(`INSERT INTO profile (
    name, 
    avatar, 
    monthly_budget, 
    days_per_week, 
    hours_per_day
    vacation_per_year,
    value_hour
) VALUES (
    "Matheus",
    "https://github.com/ttheusp.png",
    3000,
    5,
    5,
    4,
    75
)`)

// Insere dados na tabela job
Database.run(`INSERT INTO jobs (
    name,
    daily_hours,
    total_hours,
    createdAt
) VALUES (
    "Pizzaria Guloso",
    5,
    30,
    1617905835185
)`)

Database.run(`INSERT INTO jobs (
    name,
    daily_hours,
    total_hours,
    createdAt
) VALUES (
    "OneTwo Project",
    3,
    47,
    1617905835185
)`)

Database.close()