from flask import Flask, request, jsonify
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pickle

app = Flask(__name__)

# Load pre-trained models
with open('models/vectorizer_user.pkl', 'rb') as f:
    vectorizer_user = pickle.load(f)

with open('models/vectorizer_property.pkl', 'rb') as f:
    vectorizer_property = pickle.load(f)

# Example data (replace this with actual data source if needed)
property_data = [
    {"property_id": 1, "description": "2BHK apartment in New York, price 550000"},
    {"property_id": 2, "description": "3BHK house in Los Angeles, price 800000"},
    {"property_id": 3, "description": "1BHK studio in New York, price 300000"},
    {"property_id": 4, "description": "2BHK apartment in San Francisco, price 600000"},
    {"property_id": 5, "description": "3BHK villa in Miami, price 750000"},
    {"property_id": 6, "description": "1BHK apartment in Boston, price 350000"},
    {"property_id": 7, "description": "2BHK house in Seattle, price 500000"},
    {"property_id": 8, "description": "4BHK mansion in Chicago, price 1200000"},
    {"property_id": 9, "description": "2BHK condo in Austin, price 400000"},
    {"property_id": 10, "description": "1BHK loft in New York, price 320000"},
]

@app.route('/recommend', methods=['POST'])
def recommend():
    user_data = request.json
    user_profile = user_data['browsing_history'] + " " + user_data['preferences']
    
    # Vectorize user profile
    user_vector = vectorizer_user.transform([user_profile])
    
    # Vectorize property descriptions
    property_vectors = vectorizer_property.transform([p['description'] for p in property_data])
    
    # Compute cosine similarity
    similarities = cosine_similarity(user_vector, property_vectors).flatten()
    
    # Get the indices of the top 5 most similar properties
    top_indices = similarities.argsort()[-5:][::-1]
    
    # Prepare the response
    recommended_properties = [property_data[i] for i in top_indices]
    return jsonify(recommended_properties)

if __name__ == '__main__':
    app.run()
