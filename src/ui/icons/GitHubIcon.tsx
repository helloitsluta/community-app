import React from "react"
import githubIcon from "../../assets/icons/github-mark-white.svg"

interface GitHubIconProps {
  className?: string
}

const GitHubIcon: React.FC<GitHubIconProps> = ({ className }) => {
  return (
    <img
      src={githubIcon}
      alt="GitHub"
      className={`fill-current ${className}`}
    />
  )
}

export default GitHubIcon
