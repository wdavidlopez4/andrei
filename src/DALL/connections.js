import sql from 'mssql'

const dbsetting = {
    user: 'andrey',
    password: 'andrupasswor',
    database: 'desktop',
    database: 'dba'
}

async function getConnection(){
    const pool = await sql.connect(dbsetting);
    return pool
}

