/usr/local/lib/node_modules/protractor/bin/webdriver-manager start > /dev/null 2>&1 &

# wait until selenium is up
while ! curl http://localhost:4444/wd/hub/status &>/dev/null; do :; done

# run the build
#grunt cibuild --force
protractor /Users/AshaRakesh/pro-proj/conf.js

# stop selenium
curl -s -L http://localhost:4444/selenium-server/driver?cmd=shutDownSeleniumServer > /dev/null 2>&1
