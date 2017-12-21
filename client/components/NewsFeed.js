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
      <div className="news">
        {
          nyt.map((story, idx) => {
            return (
              <div className="article" key={idx}>
                <div>
                  <a href={story.url} target="_blank"><span className="title">{story.title}</span></a> (New York Times, {story.date})
                </div>
                <span className="abstract">{story.abstract}</span>
              </div>
            )
          })
        }
      </div>
    )  
  }
}