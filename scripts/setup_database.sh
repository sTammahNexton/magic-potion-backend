#!/bin/bash

# Set environment variables
export POSTGRES_DB=postgres
export POSTGRES_HOST=localhost
export POSTGRES_USER=postgres
export POSTGRES_PORT=5432
export POSTGRES_PASSWORD=00000

# Create the PostgreSQL database
createdb -h $POSTGRES_HOST -p $POSTGRES_PORT -U $POSTGRES_USER -W -E UTF8 $POSTGRES_DB
