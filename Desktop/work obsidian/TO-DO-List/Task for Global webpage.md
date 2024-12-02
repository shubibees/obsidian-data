- [ ] Add "Global" as country 
- [ ] Change sort country code of Qatar from "qa" to "QA"
- [ ] Page and page section of india is going to be global
- [ ] Make country of Domain and industry as Global if it contain "india" as country
- [ ] Also need to change country "india" to "Global" in page section,page gallery and page seo
- [ ] change defalut country as Global in all the api
- [ ] header is providing slug, by clicking on that we are query={country_id:'101',slug} as default and then showing list if country_id is present with slug we are listing course.
- [ ] course slug search with country id and domain and vendor slug. 


# Important to Rember

- [-] remove currency from courser, add in schedule. so watch out for ecommerce logic in frontend

# My Approch

- [x] change india country to Global ( it will make sure inital data related to india will become global)
- [x] master data is fine, it doesn't contain country as foreign key
- [x] about section in admin does not have country as foreign key
- [x] invistor relation also look fine

# Step
- [x] change india country to Global
- [x] select all state for global to india
- [x] do change in contact location (cms) 
      * Open the terminal and access the MongoDB shell by typing:
      * Switch to the appropriate database: `use vinsys_with_training`
      * Run the `updateMany` query to update all documents where `country_id` is `101` and set it to `250`:
      *     db.setting_state.updateMany( { country_id: 101 },  { $set: { country_id: 250 } }  )
        db.setting_city.updateMany( { country_id: 101 },  { $set: { country_id: 250 } }  )
- [x] change in Region and country in training at asia
- [x] api will select 250 as user_course_Id with ip info, because this country doesn't have data. it will not show anything
- [x] rember
      ![[Pasted image 20241104160539.png]]
  - [-] use new certificate practice, need  to install "pip install PyPDF2"