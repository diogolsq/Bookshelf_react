require 'rails_helper'

RSpec.describe "Shelves", type: :request do
  describe "GET /kanban" do
    it "returns http success" do
      get "/kanban"
      expect(response).to have_http_status(:success)
    end
  end

  describe "Salvando books na shelves" do
    it 'Save' do
      user = { user: 24} 
      shelves = {
        "estante": [
            {
                "label": "Ethelyn Grimes",
                "id": 11,
                "title": "WAS a curious.",
                "description": "Duchess: 'and the moral of that is--\"Be what you were down here with me! There are no mice in the se",
                "laneId": "lane1"
            },
            {
                "label": "Juliet Hudson",
                "id": 17,
                "title": "Alice herself, and.",
                "description": "I!' said the Gryphon. 'We can do no more, whatever happens. What WILL become of me? They're dreadful",
                "laneId": "lane1"
            },
            {
                "label": "Keshaun Lesch",
                "id": 19,
                "title": "I tell you!' said.",
                "description": "Gryphon. 'How the creatures order one about, and crept a little sharp bark just over her head on her",
                "laneId": "lane1"
            }
        ],
        "lendo": [
            {
                "label": "Olen Reilly",
                "id": 14,
                "title": "Gryphon: and it.",
                "description": "Alice thoughtfully: 'but then--I shouldn't be hungry for it, she found herself at last she stretched",
                "laneId": "lane2"
            },
            {
                "label": "Darrel Adams",
                "id": 18,
                "title": "England the nearer.",
                "description": "VERY short remarks, and she heard the King said to herself. (Alice had been to a shriek, 'and just a",
                "laneId": "lane2"
            },
            {
                "label": "Clement Wolf",
                "id": 16,
                "title": "Alice, very much.",
                "description": "I've seen that done,' thought Alice. 'I'm glad I've seen that done,' thought Alice. One of the door ",
                "laneId": "lane2"
            },
            {
                "label": "Elenor Morar",
                "id": 13,
                "title": "Alice had not as.",
                "description": "And the moral of that dark hall, and close to her, one on each side, and opened their eyes and mouth",
                "laneId": "lane2"
            }
        ],
        "lido": [
            {
                "label": "Marilyne Larkin",
                "id": 20,
                "title": "Bill's place for a.",
                "description": "YOU with us!\"' 'They were obliged to have been was not a mile high,' said Alice. 'Why not?' said the",
                "laneId": "lane3"
            },
            {
                "label": "Jannie Prohaska",
                "id": 15,
                "title": "Queen said--' 'Get.",
                "description": "Grammar, 'A mouse--of a mouse--to a mouse--a mouse--O mouse!') The Mouse did not like to show you! A",
                "laneId": "lane3"
            },
            {
                "label": "Ryley Bednar",
                "id": 12,
                "title": "RED rose-tree, and.",
                "description": "Alice did not see anything that had slipped in like herself. 'Would it be murder to leave it behind?",
                "laneId": "lane3"
            }
        ]
    }   
    
      post '/shelfs/books/save', :params => {shelves: shelves, user: user}.to_json, :headers => { "Content-Type": "application/json" }
      json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
    end
  end
end
