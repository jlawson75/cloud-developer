export const config = {
  "dev": {
    "username": "udagramlawsondev", //process.env.POSTGRES_USERNAME,
    "password": "udagramlawsondev", //process.env.POSTGRES_PASSWORD,
    "database": "udagramlawsondev", //process.env.POSTGRES_DATABASE,
    "host":  "udagramlawsondev.cqpuyull1uls.us-east-1.rds.amazonaws.com", //process.env.POSTGRES_HOST,
    "dialect": "postgres",
    "aws_region": "us-east-1", //process.env.AWS_REGION,
    "aws_profile": "default", //process.env.AWS_PROFILE,
    "aws_media_bucket": "udagram-lawson-dev" //process.env.AWS_MEDIA_BUCKET 
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
