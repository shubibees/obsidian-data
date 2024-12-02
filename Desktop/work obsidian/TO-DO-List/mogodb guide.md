###### Restore :
`mongorestore --host=185.4.176.75:27017 --db=vinsys_with_training C:\Users\ibees\Desktop\vinsys_backup\16_07_24\vinsys_with_training`

###### backup: 
`mongodump --host=185.4.176.75:27017 --db=vinsys_with_training --out=C:\Users\ibees\Desktop\vinsys_backup\16_07_24`



single_file

mongodump --db=vinsys_with_training --collection=business_courses --out=C:\Users\ibees\Desktop\vinsys_backup\business_courses

mongorestore --db=vinsys_with_training --collection=business_faq C:\Users\ibees\Desktop\vinsys_backup\business_faq\vinsys_with_training\business_faq.bson

