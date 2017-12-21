import React, {Component} from 'React';
import axios from 'axios';

export default class NewsFeed extends Component{
  constructor() {
    super()
    this.state = {
      nyt: []
    }
  }

  componentDidMount() {
    axios.get('/api/external/nyt')
    .then(res => res.data)
    .then(nyt => this.setState({nyt}))
  }

  render() {
    const { nyt } = this.state;
    return(
      <div>
        <h3>New York Times Stories</h3>
        {
          nyt.map((story, idx) => {
            return (
              <div className="article" key={idx}>
                <a href={story.url} target="_blank"><span className="title">{story.title}</span> {story.byline}</a>
                <p>
                  {story.abstract}
                </p>
              </div>
            )
          })
        }
      </div>
    )  
  }
}