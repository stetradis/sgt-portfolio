import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

const SocialLink = () => {
    return (
        <div className='text-4xl flex justify-center gap-8 pb-4 text-gray-600 link-hover dark:text-gray-300'>
            <a href='https://twitter.com/st3lz' target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle/></a>
            <a href='https://www.linkedin.com/in/stellatetradis/' target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></a>
            <a href='https://github.com/stetradis' target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
          </div>
    )
}

export default SocialLink;