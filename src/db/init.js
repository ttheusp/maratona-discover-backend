const Database = require('./config')

initDb()

async function initDb() {
    const db = await Database()

    // Cria tabela profile
    await db.exec(`CREATE TABLE IF NOT EXISTS profile (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        avatar TEXT,
        monthly_budget REAL,
        days_per_week INT,
        hours_per_day INT,
        vacation_per_year INT,
        value_hour REAL
    )`)

    // Cria tabela jobs
    await db.exec(`CREATE TABLE IF NOT EXISTS jobs(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        daily_hours INT,
        total_hours INT,
        createdAt DATATIME
    )`)

    Promise.all([
        db.run(`INSERT INTO profile (
            name, 
            avatar, 
            monthly_budget, 
            days_per_week, 
            hours_per_day,
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
            )`
        ), 
        db.run(`INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            createdAt
            ) VALUES (
            "Pizzaria Guloso",
            5,
            30,
            1617905835185
            )`
        ), 
        db.run(`INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            createdAt
            ) VALUES (
            "OneTwo Project",
            3,
            47,
            1617905835185
            )`
        )
    ])
    .then(res => {console.log('Dados inseridos')})
    .catch(error => console.error(error))

    await db.close()
}

// Insere dados na tabela profile
// await db.run(`INSERT INTO profile (
//     name, 
//     avatar, 
//     monthly_budget, 
//     days_per_week, 
//     hours_per_day
//     vacation_per_year,
//     value_hour
// ) VALUES (
//     "Matheus",
//     "https://github.com/ttheusp.png",
//     3000,
//     5,
//     5,
//     4,
//     75
// )`)

// Insere dados na tabela job
// await db.run(`INSERT INTO jobs (
//     name,
//     daily_hours,
//     total_hours,
//     createdAt
// ) VALUES (
//     "Pizzaria Guloso",
//     5,
//     30,
//     1617905835185
// )`)

// await db.run(`INSERT INTO jobs (
//     name,
//     daily_hours,
//     total_hours,
//     createdAt
// ) VALUES (
//     "OneTwo Project",
//     3,
//     47,
//     1617905835185
// )`)