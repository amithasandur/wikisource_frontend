import spacy
import en_core_web_sm
nlp = en_core_web_sm.load()
stop_words = nlp.Defaults.stop_words
print(stop_words)
# nlp = spacy.load("en_core_web_sm")
doc = nlp("Canada is a country in the northern part of North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres (3.85 million square miles), making it the world's second-largest country by total area. Its southern and western border with the United States, stretching 8,891 kilometres (5,525 mi), is the world's longest bi-national land border. Canada's capital is Ottawa, and its three largest metropolitan areas are Toronto, Montreal, and Vancouver.")
doc1 = nlp("design")


sum = 0
count = 0
for token in doc:
    for token1 in doc1:
        if token.is_punct is not True:
            if token not in stop_words and token1 not in stop_words:
                print(token)
                print(token1)
                sum += token1.similarity(token)
                count += 1

print(sum/count)

# print(token.text, token.pos_, token.dep_)


# from wikipedia import Wikipedia
# from wiki2plain import Wiki2Plain

# lang = 'simple'
# wiki = Wikipedia(lang)

# try:
#     raw = wiki.article('Uruguay')
# except:
#     raw = None

# if raw:
#     wiki2plain = Wiki2Plain(raw)
#     content = wiki2plain.text
