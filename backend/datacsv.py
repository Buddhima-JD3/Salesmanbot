import csv
import sys
from pathlib import Path

from firebase_admin import credentials, firestore, initialize_app

CRED_FILE = Path(__file__).resolve().parent / 'salesman-bot-56ef5-firebase-adminsdk-ozj39-4ef8a3c068.json'
COLLECTION_NAME = 'purchase_history'
FIELDS = ['Sno', 'CusID', 'Date', 'DairyProductConsumed','Category','BuyingFrequency','OnlineBuyingPreference','ExpectedDeliveryTime','PreferredTimeSlot', 'DiscountExpectations','PreferredBillingType','BuyingFarmFreshFruitsOnline']
DIRECTION = firestore.Query.DESCENDING


def main():
    """Main function"""
    client = firebase_client(str(CRED_FILE))
    collection = client.collection(COLLECTION_NAME)

    writer = csv_writer(sys.stdout, FIELDS)
    writer.writeheader()
    for snapshot in collection.order_by('Sno', direction=DIRECTION).limit(50).get():
        data = snapshot.to_dict()
        writer.writerow(data)


def firebase_client(cred_file):
    """Generate Firebase client"""
    cred = credentials.Certificate(cred_file)
    # app = initialize_app(credential=cred)
    client = firestore.client()
    return client


def csv_writer(file, fields):
    """Generate CSV writer"""
    return csv.DictWriter(file, fields)


if __name__ == '__main__':
    main()