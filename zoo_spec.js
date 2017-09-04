describe("test the zoo website", ()=> {
    beforeEach(()=>{
        browser.get("http://thetestroom.com/jswebapp");
    });

    it('verify title',()=>{
        
        var title = browser.getTitle().then((webpagetitle)=>{
            if(webpagetitle === 'Zoo Adoption | Home'){
                console.log('Zoo Adoption | Home');
                return 'Zoo Adoption | Home';
            } else {
                return 'wrong title';
            }
        });
        expect(title).toMatch('Zoo Adoption | Home');
    });

    it("verify text",()=>{
        element(by.model('person.name')).sendKeys("subscribe");
        element(by.binding('person.name')).getText().then((text)=>{
            expect(text).toMatch('subscribe');    
        });
        element(by.buttonText('CONTINUE'));
    });

	 it("verify text agaub",()=>{
        element(by.model('person.name')).sendKeys("subscribe");
        element(by.binding('person.name')).getText().then((text)=>{
            expect(text).toMatch('subscribe');
        });
        element(by.buttonText('CONTINUE'));
    }); 	
    
    });
