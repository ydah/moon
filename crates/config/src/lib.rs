mod errors;
mod task;
mod types;
mod validators;

pub mod constants;
pub mod global_project;
pub mod package;
pub mod project;
pub mod workspace;

// Re-exports structs for convenience
pub use global_project::GlobalProjectConfig;
pub use package::{PackageJson, PackageJsonValue};
pub use project::{ProjectConfig, ProjectType};
pub use task::{TaskConfig, TaskMergeStrategy, TaskOptionsConfig, TaskType};
pub use types::{FileGroups, FilePath, FilePathOrGlob, ProjectID, TargetID, TaskID};
pub use validator::ValidationErrors;
pub use workspace::WorkspaceConfig;

pub fn load_workspace_config_template() -> &'static str {
    include_str!("../templates/workspace.yml")
}

pub fn load_global_project_config_template() -> &'static str {
    include_str!("../templates/global_project.yml")
}

pub fn load_project_config_template() -> &'static str {
    include_str!("../templates/project.yml")
}