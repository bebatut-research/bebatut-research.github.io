# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "bebatut-research-theme"
  spec.version       = "0.0.1"
  spec.authors       = ["Bérénice Batut"]
  spec.email         = [""]

  spec.summary       = "A Jekyll theme to be used across all bebatut-research sub GitHub websites."
  spec.homepage      = "http://research.bebatut.fr/"
  spec.license       = "MIT"

  spec.files = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
  spec.add_runtime_dependency "jekyll-scholar"
  spec.add_runtime_dependency "jekyll-tabs"
  spec.add_runtime_dependency "jekyll-toc"
  spec.add_runtime_dependency "jekyll-paginate-v2"
  spec.add_runtime_dependency "jekyll-archives-v2"
  spec.add_runtime_dependency "jekyll-socials"
  spec.add_runtime_dependency "jekyll-link-attributes"
  spec.add_runtime_dependency "jekyll-regex-replace"
  spec.add_runtime_dependency "jekyll-email-protect"
  spec.add_runtime_dependency "jekyll-twitter-plugin"
  spec.add_runtime_dependency "jemoji"

  # Removed from default gems in recent Ruby versions (3.4+), needed by Jekyll and plugins
  %w[base64 bigdecimal csv logger observer ostruct].each do |gem_name|
    spec.add_runtime_dependency gem_name
  end
end