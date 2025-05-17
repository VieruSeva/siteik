import requests
import sys
from datetime import datetime

class APITester:
    def __init__(self, base_url):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                if response.text:
                    try:
                        print(f"Response: {response.json()}")
                    except:
                        print(f"Response: {response.text}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                if response.text:
                    try:
                        print(f"Error: {response.json()}")
                    except:
                        print(f"Error: {response.text}")

            return success, response

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, None

def main():
    # Setup
    base_url = "https://6819e43d-3c83-41dc-9896-505cf06f823f.preview.emergentagent.com/api"
    tester = APITester(base_url)
    
    # Test root endpoint
    tester.run_test(
        "Root Endpoint",
        "GET",
        "",
        200
    )
    
    # Test status endpoint - POST
    client_name = f"test_client_{datetime.now().strftime('%H%M%S')}"
    success, response = tester.run_test(
        "Create Status Check",
        "POST",
        "status",
        200,
        data={"client_name": client_name}
    )
    
    # Test status endpoint - GET
    tester.run_test(
        "Get Status Checks",
        "GET",
        "status",
        200
    )
    
    # Print results
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())