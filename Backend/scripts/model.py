import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pickle

def create_model():
    # Load data
    df_user = pd.read_csv('../data/user_data.csv')
    df_property = pd.read_csv('../data/property_data.csv')

    # Combine browsing history and preferences for user profiles
    df_user['combined_profile'] = df_user['browsing_history'] + " " + df_user['preferences']
    df_property['combined_description'] = df_property['description']

    # Vectorize the text data
    vectorizer_user = TfidfVectorizer().fit_transform(df_user['combined_profile'])
    vectorizer_property = TfidfVectorizer().fit_transform(df_property['combined_description'])

    # Save the model components
    with open('../models/vectorizer_user.pkl', 'wb') as f:
        pickle.dump(vectorizer_user, f)
    
    with open('../models/vectorizer_property.pkl', 'wb') as f:
        pickle.dump(vectorizer_property, f)
    
    return vectorizer_user, vectorizer_property

if __name__ == "__main__":
    create_model()
