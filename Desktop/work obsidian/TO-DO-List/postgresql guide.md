

### bulk

###### Backup : 
`pg_dump -U postgres -d century_database -F c -f century_database_backup.dump`
pg_dump -d century-cubicals > century-cubicals.sql


###### Restore : 
`pg_restore -U postgres -d century_database -1 century_database_backup.dump`



### single file

###### Backup : 
`pg_dump -U postgres -d century_database -t "blogs" > blogs_sql.sql`


###### Restore : 
`pg_dump -U postgres -d century_database -t "blogs" > blogs_sql.sql`


