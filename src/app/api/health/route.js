import mysql from "mysql2/promise";

export async function GET() {

    try {

        const connection = await mysql.createConnection({

            host: process.env.DB_HOST,

            port: process.env.DB_PORT,

            user: process.env.DB_USER,

            password: process.env.DB_PASSWORD,

            database: process.env.DB_NAME

        });

        await connection.query("SELECT 1");

        await connection.end();

        return Response.json({

            status: "UP",

            database: "Connected",

            environment: process.env.NODE_ENV || "development",

            version: "1.0.0",

            timestamp: new Date().toISOString()

        });

    } catch (error) {

        return Response.json({

            status: "DOWN",

            database: "Disconnected",

            error: error.message,

            timestamp: new Date().toISOString()

        }, {

            status: 500

        });

    }

}